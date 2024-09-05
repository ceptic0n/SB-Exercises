import React from 'react'
import { useState } from 'react';


const MyState = () => { 
    const players = ["mario", "peach", "luigi", "toad"];

    const getRandomPlayer = () => players[Math.floor(Math.random() * 5)];

    const [name, changeName] = useState(getRandomPlayer);
  return (
    <>
    <div>{name}</div>
    <button onClick={() => changeName(getRandomPlayer)}>change Player</button>
    </>
    
  )
}

export default MyState