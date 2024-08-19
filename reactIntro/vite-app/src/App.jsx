import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Pokecard from './components/Pokecard.jsx'
import pokemonData from './data/data.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className = 'cards-container'>
        {pokemonData.map(pokemon =>(
          <Pokecard pokemonName = {pokemon.name} pokemonType={pokemon.type} baseExperience={pokemon.base_experience} pokemonID = {pokemon.id}/>
        ))}
      </div>
    </>
  )
}

export default App