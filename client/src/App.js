import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const axios = require("axios");

export default function App() {
  const [test, setTest] = useState(null);
  useEffect(() => {
    async function testFetch() {
      const { data } = await axios.get("http://localhost:5000/joe");
      setTest(data.joe);
    }
    testFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{test ? test : "Loading"}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
