import React from 'react';
import './App.css';
import {Header} from './components/Header';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';

const todos=[
  {
    description:" Get out of bed",
    dueDate: "Wed Sep 13 2017"
  }, 
  {
description:" Brush teeth",
dueDate:" Thu Sep 14 2017"
 
},
{
description:"Eat breakfast", 
dueDate:" Fri Sep 15 2017"}
  


];

// Using functional Component
function App() {
  return (
    <div className="App">
      <Header header='Todo list' />
      <TodoList todos={todos} />
      
    </div>
  );
}

export default App;




// Using Class Component
// class App extends Component{

//   render(){
//     return(
//       <div className="App">
//       <Header header='Todo list' />
//       <TodoList todos={todos} />
//     </div>

//     )
//   }
// }
// export default App;