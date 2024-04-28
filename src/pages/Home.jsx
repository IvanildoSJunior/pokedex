import React from "react";
import background from '../assets/images/background.png';
import '../styles/Home.css'
import Form from '../components/Form';
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";
import Api from "../components/Api";

function Home() {
    return (

        <div className="home">

            <img src={background} alt="background" />

            <div className="content">

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" 
                className="pokemon_image"
                alt="Pokemon"/>
                
            </div>

            <Form className="custom-form" inputClassName="custom-input" />
            <NextButton className="next-button"/>
            <PrevButton className="prev-button"/>
            <Api pokemon='5'/>
        </div>
    )
}

export default Home