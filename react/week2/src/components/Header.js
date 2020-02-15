import React from 'react';
import {useState,useEffect} from 'react';
export const Header=({header})=>{

    const [seconds, setSeconds] = useState(0);

    
    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds + 1);

        }, 1000);
    })
      
    return(<div className='header'>
    <h1>{header}</h1>
    <p>You have used {seconds} seconds on this website</p>
    </div>)
}


