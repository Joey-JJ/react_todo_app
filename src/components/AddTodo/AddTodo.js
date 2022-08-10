import React, { useState } from "react";
import Button from "../UI/Button";
import "./AddTodo.css";

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
    <form className="AddTodo-form" onSubmit={submitHandler}>
      <input
        type="text"
        value={todoTitle}
        placeholder="Title"
        onChange={titleInputHandler}
      />
      <input
        type="text"
        value={todoDescription}
        placeholder="Description"
        onChange={descriptionInputHandler}
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
