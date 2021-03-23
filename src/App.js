import classes from "./App.module.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import MainSections from "../src/components/MainSection/MainSection";

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <MainSections className={classes.Intro} />
      </div>
    );
  }
}

export default App;
