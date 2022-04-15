import React, { useState } from "react";

const AddTod = ({ addTodo, items }) => {
  const newId = items[items.length-1].id+1;
  const initialValue = {
    id: newId,
    description: "",
    deadline: "",
  };
  const [todoItem, setTodoItem] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodoItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const current = new Date();
  const validDate = Date.parse(todoItem.deadline) >= current;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoItem.description && validDate) {
      addTodo(todoItem);
    }
    setTodoItem(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="shift-submit">
        <input
          onChange={handleChange}
          name="description"
          type="text"
          value={todoItem.description}
          placeholder="Enter description"
        />

        <input
          onChange={handleChange}
          name="deadline"
          type="date"
          value={todoItem.deadline}
        />

        <button type="submit">Add todo</button>
        {!items.length && <div className="no-item">No item</div>}
      </form>
    </div>
  );
};
export default AddTod;
