import React, { useState } from "react";
import Title from "./components/UI/Title";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";
import Todos from "./components/Todos/Todos";

const DUMMYDATA = [
  {
    key: Math.random(),
    id: Math.random(),
    title: "Clean the house",
    description: "Do it by tomorrow",
  },
  {
    key: Math.random(),
    id: Math.random(),
    title: "Walk the dog",
    description: "He needs to poop",
  },
];

const App = () => {
  const [todos, setTodos] = useState(DUMMYDATA);

  const addNewTodo = (newTodo) => {
    setTodos((prevState) => {
      return [newTodo, ...prevState];
    });
  };

  const deleteTodo = (todoId) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div className="App">
      <Title />
      <AddTodo onAdd={addNewTodo} />
      {todos.length > 0 ? (
        <Todos data={todos} onDelete={deleteTodo} />
      ) : (
        <p>No Todos at the moment</p>
      )}
    </div>
  );
};

export default App;
