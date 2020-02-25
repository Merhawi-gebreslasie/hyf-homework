import React from 'react'

export default  Border=({isDone,isEdit,handleChange,handleEdit,handleDelet,onEdit,description,deadline})=> {
    return (
        <div>
            


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
