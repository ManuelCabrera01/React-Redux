import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Dude</h1>
        <p>hello</p>
        <ChildComponent name="Ryu" age="25" name="Ryu" age="25" />
      </div>
    );
  }
}

export default App;
