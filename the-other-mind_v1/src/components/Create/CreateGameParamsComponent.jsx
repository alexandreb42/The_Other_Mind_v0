import React, { useContext, useState } from "react"

export default function CreateGameParamsComponent({gameModules}) {
    return(
        <>
        <p>Paramètres de la partie</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}