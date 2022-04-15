import React, { useState, useEffect } from "react";
import AddTod from "./AddTodo";
import FancyBorder from "./FancyBorder";
import Todo from "./Todo";

export const TodoList = ({ fecthUrl }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(fecthUrl);
      const result = await response.json();
      setItems(result);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const addTodo = (todoItem) => {
    setItems((prevTodos) => [...prevTodos, todoItem]);
  };
  const deleteTodo = (todoToDelete) => {
    setItems((prevTodos) => prevTodos.filter((todo) => todo !== todoToDelete));
  };
  const editTodo = (editingText, id) => {
    setItems((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.description = editingText;
        }
        return todo;
      })
    );
  };

  const todoItems = items.map((todo, index) => (
    <FancyBorder>
      <Todo
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        updateTodo={editTodo}
      />
    </FancyBorder>
  ));
  return (
    <>
      <FancyBorder>
        <AddTod addTodo={addTodo} items={items} />
      </FancyBorder>
      {loading ? <div>Loaing...</div> : <ul className="lists">{todoItems}</ul>}
      {error && <div>{error.message}</div>}
    </>
  );
};
