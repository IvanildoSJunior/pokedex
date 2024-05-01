import React, { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Infos from "../assets/images/Infos.png";
import "../styles/MoreInfo.css";
import HomeButton from '../components/HomeButton';
import ApiMoreInfo from "../components/ApiMoreInfo";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { PokemonContext } from "../contexts/PokemonContext";
import AddFavorite from "../components/AddFavorite";
function MoreInfo() {

    const favoritesContext = useContext(FavoritesContext);
    const pokemonContext = useContext(PokemonContext);

    const handleFavorite = () => {
        <AddFavorite/>
    }
    

    return (
        <div className="moreinfo">
            <img src={Infos} alt="Infos"className="background"/>
            <div className="homeButtonInfo">
                <HomeButton />
            </div>
            

            

            <Link to="/favorites" className="favoritebtn">
                <button className="favorites-btn">Favoritos <FaStar /></button>
            </Link>

            <AddFavorite />
            
            <div className="moreInfoImg">
                <ApiMoreInfo />
            </div>

        </div>
    );
}

export default MoreInfo;
