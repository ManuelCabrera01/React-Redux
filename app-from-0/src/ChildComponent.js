import React, { Component } from "react";

const ChildComponent = props => {
  const { clients, deleteClient } = props;
  // const clientList = clients.map(client => {
  //   if (client.age > 30) {
  //     return (
  //       <div className="ninjas" key={client.id}>
  //         <p>name: {client.name}</p>
  //         <p>age: {client.age}</p>
  //          <br />
  //         <hr />
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });
  const clientsList = clients.map(client => {
    return client.age > 20 ? (
      <div className="ninjas" key={client.id}>
        <p>name: {client.name}</p>
        <p>age: {client.age}</p>
        <br />
        <button
          onClick={() => {
            deleteClient(client.id);
          }}
        >
          delete Client
        </button>
        <hr />
      </div>
    ) : null;
  });
  return <div className="client-list">{clientsList}</div>;
};

export default ChildComponent;
