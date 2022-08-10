import React from "react";
import Button from "../UI/Button";
import "./TodoItem.css";

const TodoItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="todo-item">
      <input type="checkbox" />
      <h2 className="todo-item__title">{props.title}</h2>
      <p className="todo-item__description">{props.description}</p>
      <Button onClick={deleteHandler}>Delete</Button>
    </li>
  );
};

export default TodoItem;
