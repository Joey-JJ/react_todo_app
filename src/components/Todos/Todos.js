import React from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";

const Todos = (props) => {
  return (
    <ul className="todos">
      {props.data.map((todo) => {
        return (
          <TodoItem
            title={todo.title}
            description={todo.description}
            key={todo.key}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
