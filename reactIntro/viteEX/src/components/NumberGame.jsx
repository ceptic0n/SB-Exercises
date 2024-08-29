import React from 'react'
import { useState } from 'react';

const NumberGame = () => {
    const rand = () => Math.floor(Math.random() * 10) + 1;
    const [guess, setGuess] = useState(rand);
    const [target, setTarget] = useState(rand);
  return (
    <div>
        <h1>Target Number : {target}</h1>
        <h1>Your Number : {guess}</h1>
        <button onClick={() => setGuess(rand())}>Generate Random Number</button>
    </div>
  )
}

export default NumberGame