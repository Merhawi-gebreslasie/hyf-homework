import React from "react";

export const AddTodoItem = ({ addTodo, items }) => {
  const newId = Math.floor(Math.random() * 10000);
  const newItems = ["Go to gym", "Taking a tur", "Hanging with friends"];
  const randomItem = Math.floor(Math.random() * newItems.length);
  const newTodo = {
    id: newId,
    description: newItems[randomItem],
  };
  return (
    <div className="addtodo">
      <button onClick={() => addTodo(newTodo)}>Add todo</button>{" "}
      {!items.length && <span>No items</span>}
    </div>
  );
};
