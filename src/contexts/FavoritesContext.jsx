import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const addPokemon = (pokemon) => {
        if (!favorites.some(favorite => favorite === pokemon)) {
            
            setFavorites([...favorites, pokemon]);
        } else {
            console.log(`${pokemon} já está na lista de favoritos.`);
        }
    };

    return (
        <FavoritesContext.Provider value={{favorites, addPokemon}}>
            {children}
        </FavoritesContext.Provider>
    );
};
