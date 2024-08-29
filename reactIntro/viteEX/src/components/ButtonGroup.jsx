import React from 'react'

const ButtonGroup = () => {
    const press = (color) => console.log(color.toUpperCase());

  return (
    <div>
        <button onClick = {() => press('Red')}>Red</button>
        <button onClick = {() => press('Yellow')}>Yellow</button>
        <button onClick = {() => press('Blue')}>Blue</button>
    </div>
  )
}

export default ButtonGroup