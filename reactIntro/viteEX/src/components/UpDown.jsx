import React from 'react'
import { useState } from 'react'

const UpDown = () => {
    const [number, setNumber] = useState(0); 

    const plus1 = () => setNumber(currNum => currNum + 1);
    const minus1 = () => setNumber(currNum => currNum - 1);
  return (
    <>
    <div>{number}</div>
    <button onClick={plus1}>+ 1</button>
    <button onClick={minus1}>- 1</button>
    </>
    
  )
}

export default UpDown