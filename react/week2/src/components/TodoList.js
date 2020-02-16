import React from 'react';
import { TodoItem } from './TodoItem';
import { useState } from 'react';
import { AddTodosAndNoItems } from './AddTodosAndNoItems';

export const TodoList = ({ todos }) => {

    const [items, setItems] = useState(todos);

    const addTodos = newtodos =>{
        setItems(preTodos =>[...preTodos, newtodos]);
    }

    const handleDelet = id =>{
        setItems(preTodos =>{
            preTodos.filter((item, index) => index !== id);
        });
    }



    return (
        <div className='lists'>

            <div>
                <AddTodosAndNoItems
                    addTodos={addTodos}
                    todos={todos}
                    items={items}
                />
            </div>

            <div>
                <ul>
                    {items.map((todoitem, index) => (
                        <TodoItem
                            key={todoitem.id}
                            id={index}
                            description={todoitem.description}
                            handleDelet={handleDelet}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
