import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar title="First App" about="About" />
      <About/>
      <div className="container my-3">
        <TextForm heading="Enter your text below" />
      </div>
    </>
  );
}

export default App;
