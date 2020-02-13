import React from 'react';
import { TodoItem } from './TodoItem';


// functional Component

export const TodoList=({todos})=>{
    return(
<div className='lists'>
<ul>

{todos.map((todo,index)=>(
    <TodoItem 
    key={index}
    description={todo.description}
    dueDate={todo.dueDate}
    />
))}

</ul>

</div>


    )
};

// Class Component
// class TodoList extends Component{
// render(){
//         return(
//             <div className='lists'>
// {this.todos.map((todo,index)=>(
//     <TodoItem 
//     key={index}
//     description={todo.description}
//     dueDate={todo.dueDate}
//     />
// ))}


// </div>


//         )
//     }
// }
// export default TodoList;