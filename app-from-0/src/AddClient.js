import React, { Component } from "react";

class AddClient extends Component {
  state = {
    //create empty elements in the state  to recive the information from the form
    name: null,
    age: null
  };
  //select the id and the value from the form which is going to match with the elemets in the state
  handleChange = e => {
    this.setState({ [e.target.id]: [e.target.value] });
  };
  //summit the form
  handleSumit = e => {
    e.preventDefault();
    // we get addclient function  from the App.js  component and we send the state back
    this.props.addClientFun(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">age</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <button>summit</button>
        </form>
      </div>
    );
  }
}

export default AddClient;
