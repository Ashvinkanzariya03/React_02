import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="First App"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={'Something Is Worng'}/>
      <div className="container my-3">
        <TextForm heading="Enter your text below" mode={mode} />
      </div>
      <About />
    </>
  );
}

export default App;
