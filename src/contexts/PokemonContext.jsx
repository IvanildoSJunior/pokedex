import React, {createContext, useState} from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {
    const [pokemon, setPokemon] = useState('1');

    const changePokemon = (changePokemon) => {
        setPokemon(changePokemon);
    };

    return (
        <PokemonContext.Provider value={{pokemon, changePokemon }}>
            {children}
        </PokemonContext.Provider>
    );
};