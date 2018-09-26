import React, { Component } from "react";

class AddClient extends Component {
  state = {
    //create empty elements in the state  to recive the information from the form
    name: null,
    age: null,
    id: null
  };
  //select the id and the value from the form
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  //summit the form
  handleSumit = e => {
    e.preventDefault(console.log(this.state));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">age</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="id">id</label>
          <input type="text" id="id" namee="id" onChange={this.handleChange} />
          <button>summit</button>
        </form>
      </div>
    );
  }
}

export default AddClient;
