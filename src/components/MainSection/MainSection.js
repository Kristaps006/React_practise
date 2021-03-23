import React, { Component } from "react";
import classes from "./MainSection.module.css";
import Intro from "../MainSection/Intro/Intro";

class MainSections extends React.Component {
  state = {
    text: "My name is Kristaps ",
    i: 0,
  };

  componentDidMount() {
    this.typerWrite();
  }

  typerWrite = () => {};

  render() {
    return (
      <div className={classes.MainSection}>
        <Intro text={this.state.text} />
      </div>
    );
  }
}

export default MainSections;
