import React from "react";
import Button from "../UI/Button";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["todo-item"]}>
      <input type="checkbox" />
      <div className={styles["todo-item__contents"]}>
        <h2 className={styles["todo-item__title"]}>{props.title}</h2>
        <p className={styles["todo-item__description"]}>{props.description}</p>
      </div>
      <Button onClick={deleteHandler}>Delete</Button>
    </li>
  );
};

export default TodoItem;
