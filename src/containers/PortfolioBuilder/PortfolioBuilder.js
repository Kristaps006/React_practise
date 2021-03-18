import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

import styles from "./PortfolioBuilder.module.css";

class PortfolioBuilder extends React.Component {
  render() {
    return (
      <div className={styles.PortfolioBuilder}>
        <Nav />
      </div>
    );
  }
}

export default PortfolioBuilder;
