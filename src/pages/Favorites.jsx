import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import ApiFavorites from "../components/ApiFavorites"; 
import '../styles/Favorites.css'
import hud from "../assets/images/favorites_hud.png"
import HomeButton from '../components/HomeButton';

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