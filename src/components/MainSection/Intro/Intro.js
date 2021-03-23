import React from "react";

import TypeWriterEffect from "react-typewriter-effect";
import classes from "./Intro.module.css";

const intro = (props) => {
  const type = (
    <TypeWriterEffect
      startDelay={100}
      cursorColor="black"
      text="My name is Kris"
      typeSpeed={200}
    />
  );

  return (
    <div className={classes.Intro}>
      <h1>
        {props.text}
        {type}
      </h1>
    </div>
  );
};

export default intro;
