import React, { useState } from "react";
const SubmitShift = ({ addEmployee }) => {
  const initialValue = {
    name: "",
    start: "",
    end: "",
  };
  const [user, setUser] = useState(initialValue);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      user.name &&
      (Date.parse(user.end) >= Date.parse(user.start))
    ) {
      addEmployee(user);
    }
    setUser(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="shift-submit">
        <h1>Shift to submit</h1>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={user.name}
          placeholder="Enter Name"
        />

        <input
          onChange={handleChange}
          name="start"
          type="datetime-local"
          value={user.start}
        />

        <input
          onChange={handleChange}
          name="end"
          type="datetime-local"
          value={user.end}
        />
        <button type="submit">Save shift</button>
      </form>
    </div>
  );
};
export default SubmitShift;
