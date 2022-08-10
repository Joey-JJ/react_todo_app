import React from "react";
import Title from "./components/UI/Title";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <AddTodo />
    </div>
  );
}

export default App;
