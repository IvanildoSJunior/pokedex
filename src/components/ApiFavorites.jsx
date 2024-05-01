import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const PokemonImages = () => {
    const { favorites } = useContext(FavoritesContext);
    const [pokemonImages, setPokemonImages] = useState([]);

    useEffect(() => {
        const fetchPokemonImages = async () => {
            try {
                const promises = favorites.map(async (pokemonName) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                    const data = await response.json();
                    return data.sprites.other['official-artwork'].front_default;
                });
                const images = await Promise.all(promises);
                setPokemonImages(images);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPokemonImages();
    }, [favorites]);

    return (
        <div>
            <div className="pokemon-images">
                {pokemonImages.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Pokemon ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default PokemonImages;
