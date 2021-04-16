import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-Link"
          href="https://flask.palletsprojects.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Flask
        </a>
        <a
          className="App-Link"
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Python
        </a>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => window.open("https://material-ui.com/", "_blank")}
        >
          Material UI
          <InfoOutlined />
        </Button>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
