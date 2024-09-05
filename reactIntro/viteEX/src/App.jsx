import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HEADER from './components/HEADER'
import Clicker from './components/Clicker'
import ButtonGroup from './components/ButtonGroup'
import NumberGame from './components/NumberGame'
import MyState from './components/MyState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HEADER />
      <MyState/>
    </>
  )
}

export default App
