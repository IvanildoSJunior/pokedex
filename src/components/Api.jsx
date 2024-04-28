
import React, { useState, useEffect, useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

function Api({ pokemon }) {
    const [pokemonData, setPokemonData] = useState(null);
    const pokemonContext = useContext(PokemonContext)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const data = await response.json();
                setPokemonData(data);
                pokemonContext.changePokemon(data.id);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [pokemon]);

    if (!pokemonData) {
        return null
    }

    
    


    return (
        <React.Fragment>
            <img src={pokemonData['sprites']['other']['home']['front_default']} 
            className='pokemon_image' alt='pokemon' style={{width: '30%',height: 'auto',top: '25%', left: '21%'}}/>
            <h1 className="pokemon_data">
                <span className="pokemon_number">{pokemonData.id}</span> - <span className="pokemon_name">{pokemonData.name}</span>
            </h1>
        </React.Fragment>
    );
}

export default Api;
