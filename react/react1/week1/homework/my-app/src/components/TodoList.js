import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  const todoItems=todos.map((todo, index) => (
          <TodoItem
            key={index}
            description={todo.description}
            dueDate={todo.dueDate}
          />
        ))
  return (
    <div className="lists">
      <ul>
        {todoItems}
      </ul>
    </div>
  );
};
