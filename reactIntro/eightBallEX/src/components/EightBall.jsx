import React from 'react'
import { useState } from 'react'
import responses from '../assets/responses.jsx'

const EightBall = () => {


    //lets create a function that returns a random response from the response array
    const randomNum = Math.floor(Math.random() * responses.length);
    const getRandomResponse = () => responses[randomNum].msg;
    const getResponseColor = () => responses[randomNum].color;

    const [currResponse, changeResponse] = useState("Think of a Question");
    const [currColor, changeColor] = useState()

    const eightBallClickHandler = () => {
        changeResponse(getRandomResponse);
        changeColor(getResponseColor);
    }

    const resetEightBall = () => {
        changeResponse("Think of a Question");
        changeColor("black");
    }

  return (
    <>
        <div className = "eightBall" style={{backgroundColor:currColor}} onClick = {() => eightBallClickHandler()}>{currResponse}</div>
        <button onClick = {() => resetEightBall()}>Reset Ball</button>
    </>
  )
}

export default EightBall;