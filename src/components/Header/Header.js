import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";

const header = () => (
  <React.Fragment>
    <div>LOGO</div>
    <NavigationItems />
  </React.Fragment>
);

export default header;
