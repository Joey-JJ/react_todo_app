import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <h2 className="todo-item__title">{props.title}</h2>
      <p className="todo-item__description">{props.description}</p>
    </li>
  );
};

export default TodoItem;
