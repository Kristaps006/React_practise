import styles from "./App.module.css";
import React, { Component } from "react";
import PortfolioBuilder from "../src/containers/PortfolioBuilder/PortfolioBuilder";

class App extends React.Component {
  render() {
    return (
      <div>
        <PortfolioBuilder />
      </div>
    );
  }
}

export default App;
