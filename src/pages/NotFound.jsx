import { Link } from "react-router-dom"
import '../styles/NotFound.css';
import gear from '../assets/images/gear.png';
import HomeButton from "../components/HomeButton";


function NotFound() {
    return (
        <div className="not-found">

            <div className="content">
                <h1>404 - Not Found</h1>
                <img src={gear} alt="NotFound" />
            </div>

            <div className="back-home">
                    <h2>Back to home</h2>
                    <HomeButton imageSize="50px" />
            </div>
        </div>


    )    
}

export default NotFound