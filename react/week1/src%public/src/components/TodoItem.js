import React from 'react';
// functional Components
export const TodoItem=(props)=>{
    return(

        <div className='items'> 
        
       <li>
       
       {props.description}
       </li> 


       <li>
       {props.dueDate}
       </li>
       
        </div>
    )
};

// class Components
//  class TodoItem extends React.Component{
//     render(){
//         return(

            
//         <div className='items'> 
//         <h5>{this.props.description} :{this.props.dueDate}</h5>
//         </div>
//         )
//     }
// }
// export default TodoItem;