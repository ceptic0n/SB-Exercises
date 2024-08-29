import React from 'react'
import { useState } from 'react'

const Clicker = () => {
    const [count, setCount] = React.useState(0)
    
  return (
    <div>
        <button onClick = {() => setCount(count + 1)}>Count = {count}</button>
        <button onClick = {() => setCount(count - 1)}>Count = {count}</button>
    </div>
    
  )
}

export default Clicker