import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="User">
      <h1 onClick={props.buttonclick}>
        This is {props.username} {props.time} time creating {props.language} app
      </h1>
      <div>{props.children}</div>
      <p>
        Loren Ipsum Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum
        Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren IpsumLoren IpsumLoren
        Ipsum
      </p>
      <div>{props.children}</div>
    </div>
  );
};

export default userOutput;
