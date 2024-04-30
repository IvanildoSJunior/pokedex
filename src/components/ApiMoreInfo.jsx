import React, { useState, useEffect, useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { handleType } from '../components/Types'
import { handleHA } from './Habilidades';

function ApiMoreInfo () {
    const pokemonContext = useContext(PokemonContext)
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonContext.pokemon}`);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [pokemonContext.pokemon]);
    
    if (!pokemonData) {
        return null
    }

    

    return (
        
        <React.Fragment>
            
            <img src={pokemonData['sprites']['other']['home']['front_default']} 
            className='pokemon_imageInfo' alt='pokemon' />
            <h1 className="pokemon_dataInfo">
                <span className="pokemon_number">{pokemonData.id}</span> - <span className="pokemon_name">{pokemonData.name}</span>
            </h1>
            <h1 className='pokemon_altura'>
                <span className='pokemon_altura'>Altura: {pokemonData.height}</span>
            </h1>
            <h1 className='pokemon_Tipos'>
                <span className='pokemon_Tipos'>Tipos: {handleType(pokemonData.types)} </span>
            </h1>
            <h1 className='pokemon_Peso'>
                <span className='pokemon_Peso'>Peso: {pokemonData.weight}</span>
            </h1>
            <h1 className='pokemon_ha'>
                <span className='pokemon_ha'>Habilidades: {handleHA(pokemonData.abilities)}</span>
            </h1>
        </React.Fragment>
    );
}

export default ApiMoreInfo