import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"

/*
const handleClick = () => {
    window.location.assign('/game');
}
*/

export default function IndexPlayComponent({gameModules}) {
    return(
        <>
        <Link className="gameButton" to="/game">
            Jouer
        </Link>
        </>
    )
}