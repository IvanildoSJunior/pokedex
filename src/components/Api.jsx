
import React, { useState, useEffect } from 'react';

function Api({ pokemon }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [pokemon]);

    if (!pokemonData) {
        return null;
    }

    return (
        <React.Fragment>
            <h1 className="pokemon_data">
                <span className="pokemon_number">{pokemonData.id}</span> - <span className="pokemon_name">{pokemonData.name}</span>
            </h1>
        </React.Fragment>
    );
}

export default Api;
