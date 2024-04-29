import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Infos from "../assets/images/Infos.png";
import "../styles/MoreInfo.css";

function MoreInfo() {

    return (
        <div className="moreinfo">
            <img src={Infos} alt="Infos"className="background"/>
            

            <Link to="/favorites" className="favoritebtn">
                <button className="favorites-btn">Favoritos<FaStar /></button>
            </Link>

            <button className="add-favorites">Adicionar aos Favoritos<FaHeart /></button>

        </div>
    );
}

export default MoreInfo;
