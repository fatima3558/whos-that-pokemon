import { React, useState } from 'react';

const Game = (props) => {
	const [pokemonName, setPokemonName] = useState('')

	const onInputChange = (e) => {
		setPokemonName(e.target.value)
	}

	const guessPokemon = (e) => {
		e.preventDefault()
		if (pokemonName.toLowerCase() === props.pokemon.species.name) {
			props.setGuessed(true)
			setPokemonName('')
		} else {
			props.setGuessed(false)
			setPokemonName('')
		}
	}

	return(
		<>
			<div className="imgDiv">
			{ props.guessed !== null ?
				<img src={props['pokemon']['sprites']['other']['official-artwork']['front_default']} /> :
				<img className="silhouette" src={props['pokemon']['sprites']['other']['official-artwork']['front_default']} />
			}
			</div>
			<br />
			{ props.guessed === null &&
				<>
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
			{ props.guessed !== null &&
				<>
					<div className="successMessage">
					{ props.guessed ? <span>Nice! That's </span>: <span>You're a horrible Pokémon trainer! You didn't recognize </span>}
						<h3 className="inline">{props['pokemon']['name']}</h3><span>!</span>
					</div>
				</>
			}
		</>
	)
}

export default Game