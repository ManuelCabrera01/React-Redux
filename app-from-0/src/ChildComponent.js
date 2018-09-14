import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    // console.log(this.props);
    const { name, age } = this.props;
    return (
      <div className="ninjas">
        <h2>My first ChildComponent component</h2>
        <p>Name : {name}</p>
        <p>age: {age}</p>
      </div>
    );
  }
}

export default ChildComponent;
