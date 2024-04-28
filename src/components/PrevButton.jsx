import prev from '../assets/images/left_arrow.png';
import { PokemonContext } from "../contexts/PokemonContext";
import {React, useContext } from 'react';
import '../styles/PrevButton.css'

function PrevButton({className}) {

    const pokemonContext = useContext(PokemonContext);

    const handleClick = () => {
        pokemonContext.prevPokemon();
    }
    return(
        <div className={className} >
            <img src={prev}alt='prev' className='prev' onClick={handleClick}/>
        </div>
    )
}

export default PrevButton