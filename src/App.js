import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";

class App extends React.Component {
  state = {
    firstName: ["Mikkel", "Jan", "Theodor"],
  };

  nameChange = (newName) => {
    this.setState({
      firstName: ["Klaus", newName, "John"],
    });
  };

  render() {
    const button = {
      backgroundColor: "olive",
      fontSize: "11",
      boxShadow: "1px 2px 3px #ccc",
      color: "black",
      borderRadius: "3px",
    };

    return (
      <div className="App">
        <UserOutput username="Kris" time="first" language="React">
          <div>
            This is very hard to write in React when you are not use to it
          </div>
        </UserOutput>

        <UserOutput
          buttonclick={this.nameChange.bind(this, "Claus")}
          username={this.state.firstName[1]}
          time="third"
          language="Vue"
        />
        <UserOutput
          username={this.state.firstName[2]}
          time="second"
          language="html"
        />
        <UserOutput username="Marianne" time="fifth" language="css">
          <div>
            This is very hard to write in React when you are not use to it
          </div>
        </UserOutput>
        <button onClick={this.nameChange} style={button}>
          Magic Button
        </button>
      </div>
    );
  }
}

export default App;
