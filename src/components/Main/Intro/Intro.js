import React, { Component } from "react";
import classes from "./Intro.module.css";
import Portfolio from "../../../assets/img/porfolio.jpg";
import { render } from "@testing-library/react";
import Button from "./Button/Button";

class Intro extends React.Component {
  render() {
    return (
      <div className={classes.Intro}>
        <div className={classes.Text}>
          <h1>
            Hi, my name is <span style={{ fontSize: "4rem" }}>Kris</span>
          </h1>
          <p>
            Kehittamo wanted to use illustration as visual metaphor for the
            various services they provide to their clients. The look and feel
            had to be futuristic, yet human, to represent the best aspects of
            Kehittamo.
          </p>
        </div>
        <img alt="profile-picture" src={Portfolio} />
        <Button>Write me </Button>
      </div>
    );
  }
}

export default Intro;
