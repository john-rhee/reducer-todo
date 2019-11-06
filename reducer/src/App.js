import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/Reducer";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import './App.css';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Example",
    }
  ]);

  const addNewTodo = todos => {
    const newTodo = {
      id: Date.now(),
      title: todos.title,
    };
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm addNewTodo={addNewTodo} />
      <Todos todo={todo} />
    </div>
  );
}

export default App;
