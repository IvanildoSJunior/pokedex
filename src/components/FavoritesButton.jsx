import React from "react";
import { Link } from "react-router-dom";
function FavoritesButton() {
    return (
        <Link to="/favorites" className="favoriteButton">
            <button className="favorites-button">Favoritos</button>
        </Link>
    );
}

export default FavoritesButton;