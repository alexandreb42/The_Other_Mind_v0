import React, { useContext, useState } from "react"
import PlayerCardsComponent from "./PlayerCardsComponent"

export default function GameBoardComponent({gameModules}) {
    return(
        <>
        <p>test de la page Jouer !</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        <PlayerCardsComponent />
        </>
    )
}