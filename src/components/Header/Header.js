import React, { Component } from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";
import Logo from "../Header/NavigationItems/Logo/Logo";

class Header extends React.Component {
  state = {
    nav: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleNav);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleNav = () => {
    const innerHeight = window.innerHeight;
    const currentScroll = window.pageYOffset;

    if (window.scrollY > innerHeight) {
      this.setState({ nav: "sticky" });
    } else {
      this.setState({ nav: "" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Logo fillGithub="red" fillLinkedin="purple" />
        <NavigationItems navType={this.state.nav} />
      </React.Fragment>
    );
  }
}

export default Header;

/* 

const Header = () => {
  const [startScroll, setStarScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const headerStyle = {
    position: "fixed",
  
  };

  return (
    <React.Fragment>
      <Logo fillGithub="red" fillLinkedin="purple" />
      <NavigationItems style={{headerStyle}}/>
    </React.Fragment>
  );
};

export default Header;
 */
