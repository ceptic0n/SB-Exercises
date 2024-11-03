import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Circle from './Components/Circle'
function App() {
  const getRandomCoords = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return {x, y};
  }

  const [circles, setCircles] = useState([]);

  const newCircle = () => {
    const {x,y} = getRandomCoords();
    console.log(`CLick!" + ${x} + ${y}`);
    const newCircle = (
      <Circle key = {circles.length} color='blue' x={x} y={y} idx={circles.length}/>
    )
    setCircles(prevCircles => [...prevCircles, newCircle]);
  }

  const resetCircles = () => {
    setCircles([]);
  }

  return (
    <>
      <button onClick={newCircle}>finna russian roulette</button>
      <button onClick={resetCircles}>reset</button>
      {circles}
    </>
  )
}

export default App
