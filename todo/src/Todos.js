import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        console.log(todo),
        (
          <div className="collection-item" key={todo.id}>
            <span
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              {todo.content}
            </span>
          </div>
        )
      );
    })
  ) : (
    <p className="center">you have no list</p>
  );
  return <div className="todos collection">{todoList}</div>;
};
export default Todos;