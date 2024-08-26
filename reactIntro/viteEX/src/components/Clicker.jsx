import React from 'react'

const Clicker = () => {
    let count = 0
    const incrementCount = () => {
        count ++;
        console.log(count);
    }
  return (
    <button onClick = {incrementCount}>Count = {count}</button>
  )
}

export default Clicker