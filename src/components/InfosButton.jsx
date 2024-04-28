import React from "react";
import { Link } from "react-router-dom";
function InfosButton() {
    return (
        <Link to="/more_info" className="infoButton">
            <button className="info-button">Mais Informações</button>
        </Link>
    );
}

export default InfosButton;
