import React from "react";
import { useState } from "react";

export const TodoItem = ({ handleDelete, description }) => {
  const [isDone, setisDone] = useState(false);

  const handleChange = () => {
    setisDone(!isDone);
  };

  return (
    <div className="items">
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        <span>{description}</span>
      </li>

      <li>
        <input onChange={handleChange} type="checkbox" />
      </li>

      <li>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};
