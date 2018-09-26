import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    constent: ""
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDeafault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo</label>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
export default AddTodo;
