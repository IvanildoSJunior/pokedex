import React from 'react';
import homeImage from '../assets/images/home.png';
import { Link } from "react-router-dom"


function HomeButton() {

    return (
        <Link to="/" className='homeButton'>
            <img src={homeImage} alt='Home' style={{width: '50px', height: 'auto' }} />
        </Link>
    )

}

export default HomeButton