import React, { useState } from "react";

const TodoForm = props => {
  const [todos, setTodos] = useState({ title: "" });

  const handleChanges = e => {

    setTodos({ ...todos, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTodo(todos);
    setTodos({ title: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Todo Here</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        value={todos.title}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
