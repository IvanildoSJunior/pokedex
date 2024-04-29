import React, {createContext, useState} from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {
    const [pokemon, setPokemon] = useState('1');

    const changePokemon = (newPokemon) => {
        setPokemon(newPokemon.toString());
    };

    const nextPokemon = () => {
        const currentPokemon = parseInt(pokemon);
        if(currentPokemon >= 1025)
        {
            setPokemon((currentPokemon).toString());
        }else{
            setPokemon((currentPokemon + 1).toString());
        }
    }

    const prevPokemon = () => {
        const currentPokemon = parseInt(pokemon);
        if(currentPokemon <= 1)
        {
            setPokemon((currentPokemon).toString());
        }else{
            setPokemon((currentPokemon - 1).toString());
        }
        
    }

    return (
        <PokemonContext.Provider value={{pokemon, changePokemon, nextPokemon, prevPokemon }}>
            {children}
        </PokemonContext.Provider>
    );
};