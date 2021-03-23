import React, { Component } from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";
import Logo from "../Header/NavigationItems/Logo/Logo";

class Header extends React.Component {
  state = {
    nav: "",
    socialLinks: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleNav);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleNav);
  }

  handleNav = () => {
    const innerHeight = window.innerHeight;

    if (window.scrollY > innerHeight) {
      this.setState({ nav: "sticky", socialLinks: "fixed" });
    } else {
      this.setState({ nav: "", socialLinks: "" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Logo
          linkFixed={this.state.socialLinks}
          fillGithub="red"
          fillLinkedin="purple"
        />
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
