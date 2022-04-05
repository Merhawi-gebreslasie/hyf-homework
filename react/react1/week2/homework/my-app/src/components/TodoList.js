import React from "react";
import { TodoItem } from "./TodoItem";
import { useState } from "react";
import { AddTodoItem } from "./AddTodoItem";
export const TodoList = ({ todos }) => {
  const [items, setItems] = useState(todos);

  const addTodo = (newTodo) => {
    return setItems((preTodos) => [...preTodos, newTodo]);
  };

  const handleDelete = (id) => {
    // setItems((preTodos) => preTodos.filter((item,index) => index !== id));
    const preTodos = items;
    preTodos.splice(id, 1);
    setItems([...preTodos]);
  };

  return (
    <div className="lists">
      <div>
        <AddTodoItem addTodos={addTodo} items={items} />
      </div>

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={todoItem.id}
              description={todoItem.description}
              handleDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
