import React, { useContext, useState } from "react"

export default function CreateGameOkComponent({gameModules}) {
    return(
        <>
        <p>Valider la création</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}