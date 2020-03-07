import React from "react"
import {Link} from "react-router-dom"
import "../../styles/components/Menu/header.css"


function Header() {
    return (
        <div className="header">
            <div className="profil">

            </div>
            <div className="name">
                <p>Pseudo</p>
            </div>
            <ul className="onglets">
                <li className="link"><Link to="/" >Accueil</Link></li>
                <li className="link"><Link to="/game" >Jouer !</Link></li>
                <li className="link"><Link to="/create" >Créer une partie</Link></li>
                <li className="link"><Link to="/join" >Rejoindre une partie</Link></li>
            </ul>
        </div>
    )
}
export default Header;