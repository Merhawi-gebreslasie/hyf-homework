import React, { useState } from "react";
const Search = ({ handleFilter }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilter(search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Shifts Overview</h1>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          placeholder="Filter by name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
