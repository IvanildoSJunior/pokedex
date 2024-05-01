import { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { PokemonContext } from '../contexts/PokemonContext';

const AddFavorite = () => {
    const pokemonContext = useContext(PokemonContext)
    const [pokemonData, setPokemonData] = useState(null);
    const favoritesContext = useContext(FavoritesContext)

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
    const handleAddToFavorites = () => {
        favoritesContext.addPokemon(pokemonData.name)
      };


    return (
        <div>
          <button className="add-favorites" onClick={handleAddToFavorites}>Adicionar aos Favoritos</button>
        </div>
    )
  
};



export default AddFavorite;
