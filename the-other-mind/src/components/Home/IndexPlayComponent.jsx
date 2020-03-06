import React, { useContext, useState } from "react"


const handleClick = () => {
    window.location.href('/game');
}

export default function IndexPlayComponent({gameModules}) {
    return(
        <>
        <a className="gameButton" onClick={()=>handleClick()}>
            Jouer
        </a>
        </>
    )
}