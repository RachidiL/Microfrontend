import React from "react";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import logo from "./logo.svg";
import FileMgmntApp from "./components/FileMgmntApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Just me testing</p>
        <p>Don't mind me</p>
      </header>
      <hr />

      <FileMgmntApp></FileMgmntApp>
    </div>
  );
}

export default App;
