import React from "react";

export const AddTodoItem = ({ addTodos, items }) => {
  const newId = items.length;
  const newItems = ["Go to gym", "Taking a tur", "Hanging with friends"];
  const randomItem = Math.floor(Math.random() * newItems.length);
  const newTodo = {
    id: newId,
    description: newItems[randomItem],
  };
  return (
    <div className="addtodo">
      <button onClick={() => addTodos(newTodo)}>Add todo</button>{" "}
      {!items.length && <span>No items</span>}
    </div>
  );
};
