import { React, useState } from 'react';

const PokeImg = (props) => {
	const [pokemonName, setPokemonName] = useState('')
	const [guessCounter, setGuessCounter] = useState(3)
	const [guessed, setGuessed] = useState(false)
	const [completed, setCompleted] = useState(false)

	const onInputChange = (e) => {
		setPokemonName(e.target.value)
	}

	const guessPokemon = (e) => {
		e.preventDefault()
		if (pokemonName.toLowerCase() === props.pokemon.name) {
			setGuessed(true)
			setCompleted(true)
		} else {
			if (guessCounter > 0) {
				setGuessCounter(guessCounter-1)
			} else {
				setCompleted(true)
			}
		}
	}

	return(
		<>
			<img src={props['pokemon']['sprites']['other']['official-artwork']['front_default']} />
			<br />
			{ !guessed &&
				<>
				{ guessCounter < 3 && <p>Drats! Try again!</p> }
					<p>You have {guessCounter} guesses left!</p>
					<form>
						<input 
							type="text"
							name="pokemonName"
							placeholder="Who's that pokemon?"
							value={pokemonName}
							onChange={(e)=>{onInputChange(e)}}
						/>
						<button type="submit" onClick={(e)=>{guessPokemon(e)}}>Guess</button>
					</form>
				</>
			}
			{ completed &&
				<>
				{ guessed ? <p>Nice! That's</p> : <p>You're a horrible Pokémon trainer! You didn't recognize</p>}
					<h3>{props['pokemon']['name']}</h3>
				</>
			}
		</>
	)
}

export default PokeImg