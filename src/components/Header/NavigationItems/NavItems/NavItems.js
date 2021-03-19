import React from "react";
import classes from "./NavItems.module.css";

const navItems = (props) => {
  return (
    <li className={classes.NavItems}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navItems;
