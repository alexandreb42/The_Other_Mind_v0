import React, { useContext, useState } from "react"

export default function CreateGameNameComponent({gameModules}) {
    return(
        <>
        <p>Nom de la partie</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}