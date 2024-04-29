import React from 'react';
import homeImage from '../assets/images/home.png';
import { Link } from "react-router-dom"


function HomeButton({imageSize, className}) {

    return (
        <Link to="/" className='homeButton'>
            <img src={homeImage} className={className} alt='Home' style={{width: imageSize, height: 'auto' }} />
        </Link>
    )

}

export default HomeButton