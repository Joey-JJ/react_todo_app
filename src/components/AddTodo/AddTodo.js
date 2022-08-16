import React, { useRef } from "react";
import Button from "../UI/Button";
import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const titleInput = useRef();
  const descriptionInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      key: Math.random().toString(),
      id: Math.random().toString(),
      title: titleInput.current.value,
      description: descriptionInput.current.value,
      completed: false,
    };

    if (newTodo.title.trim().length === 0) {
      titleInput.current.value = "";
      descriptionInput.current.value = "";
      return;
    }

    props.onAdd(newTodo);
    titleInput.current.value = "";
    descriptionInput.current.value = "";
  };

  return (
    <form className={styles["addtodo-form"]} onSubmit={submitHandler}>
      <label htmlFor="todo-title">Title</label>
      <input
        type="text"
        name="todo-title"
        ref={titleInput}
        placeholder="Enter your title here..."
      />
      <label htmlFor="todo-desc">Description</label>
      <input
        type="text"
        name="todo-desc"
        ref={descriptionInput}
        placeholder="Enter your description here..."
      />
      <Button type="submit">Add Todo</Button>
      <Button onClick={props.onRemoveCompleted}>Remove completed</Button>
    </form>
  );
};

export default AddTodo;
