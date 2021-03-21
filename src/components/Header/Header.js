import React, { Component } from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";
import Logo from "../Header/NavigationItems/Logo/Logo";

class Header extends React.Component {
  state = {
    windowPosition: window.pageYOffset,
  };

  render() {
    return (
      <React.Fragment>
        <Logo fillGithub="red" fillLinkedin="purple" />
        <NavigationItems />
      </React.Fragment>
    );
  }
}

export default Header;
