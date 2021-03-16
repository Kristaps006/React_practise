import logo from "./logo.svg";
import styles from "./App.module.css";
import React, { Component } from "react";
import Landing from "./Landing/Landing.js";
import Nav from "./Nav/Nav.js";
import Email from "./Email/Email.js";
import About from "./About/About.js";
import Experience from "./Experience/Experience.js";
import Footer from "./Footer/Footer.js";
import Logo from "./Logo/Logo.js";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Nav
        /*   home="Home"
          about="About"
          experience="Experience"
          footer="Contact" */
        />
        <Logo />
        <Email />
        <Landing />
        <About />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;
