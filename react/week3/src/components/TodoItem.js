import React from "react";
import { useState } from "react";
// import { Border } from "./Border";
import PropTypes from "prop-types';
export const TodoItem = (props) => {
    // Destracturing assignmentExpression
    const { description, deadline, handleDelet, handleEdit } = props;

    const [isDone, setIsDone] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const handleChange = () => {
        setIsDone(!isDone);
    };

    const onEdit = () => {
        setIsEdit(!isEdit);
    };
    return (
        <div className="items">

        
        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {isEdit ? (
            <input onChange={handleEdit} value={description} />
        ) : (
                <span>
                    {description}{''} |{' '} {deadline}
                </span>
            )}
    </li>
    <li>
        <input onChange={handleChange} type="checkbox" />
    </li>

    <li>
        <button className="delete" onClick={handleDelet}>
            Delete
</button>

        <button onClick={onEdit}>
            <span>{!isEdit ? <span>Edit </span> : <span>update</span>}</span>
        </button>
    </li>
 
        </div>
    );
}

TodoItem.propTypes={
    description:PropTypes.string.isRequired,
    deadline:PropTypes.instanceOf(Date).isRequired,
    handleDelet:PropTypes.func.isRequired,
    handleEdit:PropTypes.func.isRequired,

    isDone:PropTypes.bool.isRequired
}
