import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
// import {Datefce} from './components/Datepicker'
function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      
    </div>
  );
}

export default App;
