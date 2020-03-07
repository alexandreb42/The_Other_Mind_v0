import React, { useContext, useState } from "react"

export default function GameOtherPlayerComponent({gameModules}) {
    return(
        <>
        <p>Autre Joueur</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}