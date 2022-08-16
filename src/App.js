import React, { useState } from "react";
import Title from "./components/UI/Title";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";
import Todos from "./components/Todos/Todos";

const DUMMYDATA = [
  {
    key: Math.random().toString(),
    id: Math.random().toString(),
    title: "Clean the house",
    description: "Do it by tomorrow",
    completed: true,
  },
  {
    key: Math.random().toString(),
    id: Math.random().toString(),
    title: "Walk the dog",
    description: "He needs to poop",
    completed: false,
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

  const checkTodo = (id, value) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = value;
        }
        return todo;
      });
    });
  };

  const removedCompleted = () => {
    setTodos((prevState) => prevState.filter((todo) => !todo.completed));
  };

  return (
    <div className="App">
      <Title />
      <AddTodo onAdd={addNewTodo} onRemoveCompleted={removedCompleted} />
      {todos.length > 0 ? (
        <Todos data={todos} onDelete={deleteTodo} onCheck={checkTodo} />
      ) : (
        <p>No Todos at the moment</p>
      )}
    </div>
  );
};

export default App;
