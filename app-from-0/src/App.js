import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import AddClient from "./AddClient";
class App extends Component {
  state = {
    clients: [
      { name: "flavia", age: 25, id: 1 },
      { name: "alberto", age: 59, id: 2 },
      { name: "Alexandra", age: 54, id: 3 }
    ]
  };
  // ADD NEW CLIENT TO THE ARRAY
  addClientFun = client => {
    // created an id for the nuw client
    client.id = Math.random();
    // create an identical copy of the clientArray and we add the new client
    let clients = [...this.state.clients, client];
    // and then we set de state
    this.setState({
      clients: clients
    });
  };
  // END OF ADD NEW CLIENT TO THE ARRAY

  deleteClient = id => {
    let clients = this.state.clients.filter(client => {
      return client.id !== id;
    });
    this.setState({
      clients: clients
    });
  };

  render() {
    const {} = this.props;
    return (
      <div className="App">
        <h1>My Dude</h1>
        <p>hello</p>
        <ChildComponent
          //passing the diferent function to recive any update of the props in the ther component so the functions are going to be pass as props, in the child component we updating in the other componet and send then back
          deleteClient={this.deleteClient}
          clients={this.state.clients}
        />
        <AddClient addClientFun={this.addClientFun} />
      </div>
    );
  }
}

export default App;
