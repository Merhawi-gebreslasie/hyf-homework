import React from 'react';
import { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export const TodoItem = (props) => {

    const [isDone, setisDone] = useState(false);

    const handleChange = () => {
        setisDone(() => {
            return !isDone;
        })
    };

    return (

        <div className='items' >

            <li style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                <span>
                    {props.description}
                </span>
            </li>


            <li>
                <input onChange={handleChange} type='checkbox' />
            </li>


            <li>
                <button className='delete' onClick={()=> props.handleDelet(props.id)}>
                
                    <DeleteIcon style={{ color: 'yellow' }} />

                </button>



            </li>

        </div>
    )
};
