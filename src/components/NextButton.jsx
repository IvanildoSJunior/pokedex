import {React, useContext } from 'react';
import next from '../assets/images/right_arrow.png';
import { PokemonContext } from "../contexts/PokemonContext";
import '../styles/NextButton.css'

function NextButton({className}) {
    const pokemonContext = useContext(PokemonContext);

    const handleClick = () => {
        pokemonContext.nextPokemon();
    }


    return (
        <div className={className} >
            <img src={next} alt='next' className='next' onClick={handleClick}/>
        </div>
    )
}

export default NextButton