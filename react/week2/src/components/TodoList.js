import React from 'react';
import { TodoItem } from './TodoItem';
import { useState } from 'react'
import { uuid } from 'react';

export const TodoList = ({ todos }) => {

    const [items, setItems] = useState(todos);

    const addTodos = () => {
        const newItems = ['Go to gym', 'Taking a tur', 'Hanging with friends', 'RandomItem'];
        const randemItem = Math.floor(Math.random() * newItems.length);
        const newtodos = {
            id:todos.id++ -1,
            description: newItems[randemItem]
        };
        setItems((preTodos) => {
            return [...preTodos, newtodos]
        });
    };

    const handleDelet = (id) => {
        setItems(preTodos => {
            return preTodos.filter((item, index) => {
                return index !== id;
            });


        });
    };

    return (
        <div className='lists'>

            <div>

                <button onClick={addTodos}>add todo</button>
                {''}
                {!items.length ? (<span >No items</span>) : null}

            </div>

            <ul>

                {items.map((todoitem,index) => (
                    <TodoItem
                        key={uuid}
                        id={index}
                        description={todoitem.description}
                        handleDelet={handleDelet}

                    />
                ))}

            </ul>

        </div>


    )
};
