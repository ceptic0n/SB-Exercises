import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [currNum, changeNum] = useState(0);

    const increment = () => {changeNum(currNum + 1)};

  return (
    <>
        <div>{currNum}</div>
        <button onClick={increment}>++</button>
    </>
    
  )
}

export default Counter