import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1);
        console.log("Click!");
    }
  return (
    <>
        <div>{count}</div>
        <button onClick={increment}>++</button>
    </>
  )
}

export default Counter