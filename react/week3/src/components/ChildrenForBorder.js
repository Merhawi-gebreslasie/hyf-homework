import React from 'react'

export const  ChildrenForBorder=(props)=> {
    const {children}=props
    return (
        <div className="items" style={{ border: '3px solid black' }}>
        {children}   
        </div>
    );
}
