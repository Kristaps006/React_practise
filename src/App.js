import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends React.Component {
  state = {
    firstName: [{ name: "Mikkel" }, { name: "Jan" }, { name: "Theodor" }],
  };

  nameChange = (newName) => {
    this.setState({
      firstName: [{ name: "Mikkel" }, { name: "Jan" }, { name: "Theodor" }],
    });
  };

  nameInput = (e) => {
    this.setState({
      firstName: [
        { name: e.target.value },
        { name: "Jan" },
        { name: e.target.value },
      ],
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
          username={this.state.firstName[0].name}
          time="third"
          language="Vue"
        />
        <UserOutput
          username={this.state.firstName[2].name}
          time="second"
          language="html"
        />
        <UserInput change={this.nameInput} />
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
