import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HEADER from './components/HEADER'
import Clicker from './components/Clicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HEADER />
      <Clicker />
    </>
  )
}

export default App
