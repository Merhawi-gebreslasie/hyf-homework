import React from 'react';
import './App.css';
import {Header} from './components/Header';
import { TodoList } from './components/TodoList';

const todos=[
  {
    "id": 1,
    "description": "Get out of bed"
  },
  {
    "id": 2,
    "description": "Brush teeth"
  },
  {
    "id": 3,
    "description": "Eat breakfast"
  }
]
function App() { 


  
  return (
    <div className="App">
      <Header header='Todo list' />
      <TodoList 
      Noitems='No items'
      todos={todos} />
      

    </div>
  );
}

export default App;
