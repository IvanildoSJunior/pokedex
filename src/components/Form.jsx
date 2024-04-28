import {React, useContext, useState} from "react"
import { PokemonContext } from "../contexts/PokemonContext";

function Form({ className, inputClassName }) {
    const pokemonContext = useContext(PokemonContext);
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        pokemonContext.changePokemon(searchValue);
        setSearchValue("")
    };

    return(
        <form className={className} onSubmit={handleSubmit}>
            <input
                type="search"
                className={inputClassName}
                placeholder="Nome ou número"
                value={searchValue}
                onChange={handleChange}
                required
                />
        </form>
    )
}

export default Form