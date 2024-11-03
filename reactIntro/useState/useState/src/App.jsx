import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import NumberList from './components/NumberList'
import LockPick from './components/LockPick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <LockPick/>
    </>
  )
}

export default App
