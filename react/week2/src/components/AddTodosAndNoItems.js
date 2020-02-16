import React from 'react';
import { uuid } from 'react';

export const AddTodosAndNoItems = props => {

    const newItems = ['Go to gym', 'Taking a tur', 'Hanging with friends', 'RandomItem'];
    const randemItem = Math.floor(Math.random() * newItems.length);
    const newtodos = {
        id: uuid,
        description: newItems[randemItem]
    };

    return (
        <div>
            <button onClick={(() => props.addTodos(newtodos))}>
                add todo
        </button>
            {' '}

            {!props.items.length ? (<span >No items</span>) : null}

        </div>
    )
}