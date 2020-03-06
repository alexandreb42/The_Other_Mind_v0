import React, { useContext, useState } from "react"

/*
const handleClick = () => {
    window.location.assign('/game');
}
*/

export default function IndexPlayComponent({gameModules}) {
    return(
        <>
        <a className="gameButton" href="./game" >
            Jouer
        </a>
        </>
    )
}