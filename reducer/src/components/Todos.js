import React from "react";

const Todos = props => {
  return (
    <div>
      {props.todo.map(todo => (
        <div key={todo.id}>
          <div >{todo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Todos;