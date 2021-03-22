import React from "react";
import NavItems from "./NavItems/NavItems";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => {
  return (
    <nav>
      <ul
        className={[classes.NavigationItems, classes[props.navType]].join(" ")}
      >
        <NavItems link="/" active>
          Home
        </NavItems>
        <NavItems link="/">About</NavItems>
        <NavItems link="/">Experience </NavItems>
        <NavItems link="/">Contact</NavItems>
      </ul>
    </nav>
  );
};

export default navigationItems;
