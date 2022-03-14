import React from "react";
import { TodoItem } from "./TodoItem";

// functional Component

export const TodoList = ({ todos }) => {
  return (
    <div className="lists">
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            description={todo.description}
            dueDate={todo.dueDate}
          />
        ))}
      </ul>
    </div>
  );
};
