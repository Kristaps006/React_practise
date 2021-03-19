import classes from "./App.module.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
      </div>
    );
  }
}

export default App;
