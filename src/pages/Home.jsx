import { React, useContext } from "react";
import background from '../assets/images/background.png';
import Api from "../components/Api";
import FavoritesButton from "../components/FavoritesButton";
import Form from '../components/Form';
import InfosButton from "../components/InfosButton";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";
import { PokemonContext } from "../contexts/PokemonContext";
import '../styles/Home.css';

function Home() {

    const pokemonContext = useContext(PokemonContext);
    


    return (

        <div className="home">

            <img src={background} alt="background" />
            <Form className="custom-form" inputClassName="custom-input" />
            <NextButton className="next-button"/>
            <PrevButton className="prev-button"/>
            <InfosButton className= "infoButton"/>
            <FavoritesButton className= "favoritesButton"/>
            <Api pokemon={pokemonContext.pokemon}/>
        </div>
    )
}

export default Home