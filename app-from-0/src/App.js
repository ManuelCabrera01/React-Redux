import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class App extends Component {
  state = {
    clients: [
      { name: "flavia", age: 25, id: 1 },
      { name: "alberto", age: 59, id: 2 },
      { name: "Alexandra", age: 54, id: 3 }
    ]
  };
  render() {
    const {} = this.props;
    return (
      <div className="App">
        <h1>My Dude</h1>
        <p>hello</p>
        <ChildComponent clients={this.state.clients} />
      </div>
    );
  }
}

export default App;
