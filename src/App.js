import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [darkmode, setDarkmode] = useState({ color: "#000", backgroundColor: "#fff" });

  const changeColor = () => {
    if (darkmode.color === "#fff") {
      setDarkmode({ color: "#000", backgroundColor: "#fff" });
      setText("light Mode");
    } else {
      setDarkmode({ color: "#fff", backgroundColor: "#000" });
      setText("Dark Mode");
    }
  }

  const [text, setText] = useState("Dark Mode");

  return (
    <>
      <div className="container-fluid text-center">
        <button className="btn btn-outline-dark my-5" onClick={changeColor}> {text}</button>
        <div className="text-center" style={darkmode}>
          <div className="text-center" >
            <h1 className="display-6">Project 5</h1>
            <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="text-center" >
            <h1 className="display-6">Project 5</h1>
            <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="text-center">
            <h1 className="display-6">Project 5</h1>
            <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="text-center" >
            <h1 className="display-6">Project 5</h1>
            <p className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
