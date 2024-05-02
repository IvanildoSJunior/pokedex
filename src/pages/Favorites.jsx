import React from "react";
import hud from "../assets/images/favorites_hud.png";
import ApiFavorites from "../components/ApiFavorites";
import HomeButton from '../components/HomeButton';
import '../styles/Favorites.css';

function Favorites() {


    return (
        
        <div className="favoritesPage">
            <img src={hud} alt="hud" className="hud" />
            <ApiFavorites />
            <h1 className="favoritosh1">Favoritos</h1>
            <div className="homeButtonFav">
                <HomeButton />
            </div>

        </div>

    )
}

export default Favorites