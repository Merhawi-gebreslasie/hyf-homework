import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
// import {Datefce} from './components/Datepicker'
function App() {
  return (
    <div className="App">
      <Header />
      <TodoList fecthUrl="https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw" />
    </div>
  );
}

export default App;
