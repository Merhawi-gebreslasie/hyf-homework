import React, { useState } from "react";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const [editItem, setEditItem] = useState(todo.description);
  const [isDone, setIsDone] = useState(false);
  const [checked, setChecked] = useState(false);

  const submitEdit = () => {
    updateTodo(editItem, todo.id);
    setIsDone(!isDone);
  };
  const handleDelete = () => {
    setChecked(false);
    deleteTodo(todo);
  };

  return (
    <li className="item">
      <div
        className="aline-content"
        style={{ textDecoration: checked ? "line-through" : "none" }}
      >
        {isDone ? (
          <input
            value={editItem}
            onChange={(event) => setEditItem(event.target.value)}
          />
        ) : (
          <div>{todo.description}</div>
        )}
        <div>|{todo.deadline}</div>
        <div>
          <input
            type="checkbox"
            onChange={(event) => setChecked(event.target.checked)}
          />
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
      {!isDone ? (
        <button onClick={() => setIsDone(!isDone)}>Edit</button>
      ) : (
        <button onClick={submitEdit}>Submit</button>
      )}
    </li>
  );
};

export default Todo;
