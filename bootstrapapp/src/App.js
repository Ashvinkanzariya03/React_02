import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <Alert alert={"Something Is Worng"} />
      {/* <div className="container my-3">
        <TextForm heading="Enter your text below" mode={mode} />
      </div> */}
      <BrowserRouter>
        <Navbar title="First App" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter your text below" mode={mode} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<App/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
