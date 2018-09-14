import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    // console.log(this.props);
    const { clients } = this.props;
    const clientList = clients.map(client => {
      return (
        <div className="ninjas" key={client.id}>
          <p>name: {client.name}</p>
          <p>age: {client.age}</p>

          <br />
        </div>
      );
    });
    return <div className="client-list">{clientList}</div>;
  }
}

export default ChildComponent;
