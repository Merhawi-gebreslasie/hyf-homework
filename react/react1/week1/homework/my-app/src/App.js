import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

const todos = [
  {
    description: " Get out of bed",
    dueDate: "Wed march 13 2022",
  },
  {
    description: " Brush teeth",
    dueDate: " Thu march 14 2022",
  },
  {
    description: "Eat breakfast",
    dueDate: " mon march 15 2022",
  },
];

// Using functional Component
function App() {
  return (
    <div className="App">
      <Header header="Todo list" />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
