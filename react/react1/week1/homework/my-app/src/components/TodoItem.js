import React from "react";

export const TodoItem = ({ description, dueDate }) => {
  return (
    <ul className="items">
      <li> {description}</li>
      <li> {dueDate} </li>
    </ul>
  );
};
