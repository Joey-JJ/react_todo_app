import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [todoTitle, setTodoTitle] = useState("");
  const titleInputHandler = (e) => {
    setTodoTitle(e.target.value);
  };

  const [todoDescription, setTodoDescription] = useState("");
  const descriptionInputHandler = (e) => {
    setTodoDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      key: Math.random(),
      id: Math.random(),
      title: todoTitle,
      description: todoDescription,
    };
    if (newTodo.title.trim().length === 0) {
      setTodoTitle("");
      setTodoDescription("");
      return;
    }

    props.onAdd(newTodo);
    setTodoTitle("");
    setTodoDescription("");
  };

  return (
    <form className={styles["addtodo-form"]} onSubmit={submitHandler}>
      <label htmlFor="todo-title">Title</label>
      <input
        type="text"
        name="todo-title"
        value={todoTitle}
        placeholder="Enter your title here..."
        onChange={titleInputHandler}
      />
      <label htmlFor="todo-desc">Description</label>
      <input
        type="text"
        name="todo-desc"
        value={todoDescription}
        placeholder="Enter your description here..."
        onChange={descriptionInputHandler}
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
