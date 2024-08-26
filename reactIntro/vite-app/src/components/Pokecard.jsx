import React from 'react'
  const pokemonImgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"
const Pokecard = (props) => {
    let pokemon = props.pokemonName;
    let type = props.pokemonType;
    let baseEXP = props.baseExperience;
    let pokemonID = props.pokemonID;

  return (
    <div className='pokeCard'>
        <b>{pokemon}</b>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`} alt={pokemon}/>
        <p>Type: {type}</p>
        <p>EXP : {baseEXP} </p>
    </div> 
  )
}

export default Pokecard
