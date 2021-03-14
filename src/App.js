import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Landing from "./Landing/Landing.js";
import Nav from "./Nav/Nav.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
      </div>
    );
  }
}

export default App;
