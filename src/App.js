import { React, useState, useEffect } from 'react';
import Game from './Game.js'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState({})
  const [guessed, setGuessed] = useState(null)

  const getPokemon = async () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const totalPokemon = 899
    const pokeId = Math.round(Math.random() * totalPokemon)
    const response = await fetch(baseUrl + pokeId)
    if (response.ok) {
      let json = await response.json()
      setGuessed(null)
      setPokemon(json)
    } else {
      console.log(response)
    }
  }

  return (
    <div className="App">
      <h1>Who's that pokemon?</h1>
      <p>A classic Pokemon identification game revived by Fatima &hearts;</p>
      { pokemon.name &&
        <Game 
          pokemon={pokemon}
          setPokemon={setPokemon}
          guessed={guessed}
          setGuessed={setGuessed}
        />
      }
      <br />
      <button onClick={()=>getPokemon()}>Get a pokemon!</button>
      <footer>
        <p>Fatima Gomez 2022</p>
      </footer>
    </div>
  );
}

export default App;
