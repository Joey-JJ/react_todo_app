import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [checked, setChecked] = useState(props.completed);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const checkHandler = () => {
    setChecked((prevState) => !prevState);
    props.onCheck(props.id, !checked);
  };

  return (
    <li className={styles["todo-item"]}>
      <input type="checkbox" checked={checked} onChange={checkHandler} />
      <div className={styles["todo-item__contents"]}>
        <h2 className={styles["todo-item__title"]}>{props.title}</h2>
        <p className={styles["todo-item__description"]}>{props.description}</p>
      </div>
      <Button onClick={deleteHandler}>Delete</Button>
    </li>
  );
};

export default TodoItem;
