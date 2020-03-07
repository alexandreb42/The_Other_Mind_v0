import React, { useContext, useState } from "react"

export default function GamesListComponent({gameModules}) {
    return(
        <>
        <p>Liste des jeux en cours</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}