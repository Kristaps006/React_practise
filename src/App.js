import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Validation from "./Validation/ValidationComponent";
import Char from "./Char/Char";

class App extends React.Component {
  state = {
    userInput: "",
  };

  changeText = (e) => {
    this.setState({ userInput: e.target.value });
  };

  deleteChar = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.deleteChar(index)}
        />
      );
    });

    return (
      <div>
        <h1>Assignment 1</h1>

        <input
          type="text"
          onChange={this.changeText}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
