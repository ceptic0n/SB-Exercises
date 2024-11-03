import React from 'react'
import { useState } from 'react';

const LockPick = () => {
    const passCode = [1,2,3,4];
    const [input, setInput] = useState([1,2,3,4]);
    const [keys, setKeys] = useState([0,1,2,3,4,5,6,7,8,9]);
    const updateInput = (n) =>{
        setInput(...input, n);
        console.log(input);
    }
  return (
    <div className="lockPick">
        {keys.map(n=>(
            <li>
                <button>{n}</button>
            </li>
        ))}
        <div className="passCode incorrect">{input}</div>

    </div>
  )
}

export default LockPick