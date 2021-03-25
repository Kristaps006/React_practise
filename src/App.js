import classes from "./App.module.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Main/Intro/Intro";
import Email from "./components/Main/EmailSider/EmailSider";

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Intro />
        <Email />
      </div>
    );
  }
}

export default App;
