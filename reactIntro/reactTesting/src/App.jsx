import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import FixedComponent from './Components/FixedComponent'
import Header from './Components/Header'
import Dog from './Components/Dog'
import Toggle from './Components/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Counter/>
      <FixedComponent/>
      <Dog/>
      <Toggle/>
    </>
  )
}

export default App
