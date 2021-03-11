import React from "react";

const validation = (props) => {
  let validationMessage = "text long enough";
  if (props.inputLength <= 5) {
    validationMessage = <p>Text too short</p>;
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>

    /* 
     One way of creating if statement with turnary operator 
      {props.inputLength > 5 ? <p>Text long enough</p> : <p>Text too short</p>}
     */
  );
};

export default validation;
