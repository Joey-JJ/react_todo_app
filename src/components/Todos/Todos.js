import React from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

const Todos = (props) => {
  return (
    <ul className={styles.todos}>
      {props.data.map((todo) => {
        return (
          <TodoItem
            title={todo.title}
            description={todo.description}
            key={todo.key}
            id={todo.id}
            onDelete={props.onDelete}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
