import React, { useContext, useState } from "react"

export default function GameNbLifesComponent({gameModules}) {
    return(
        <>
        <p>Nombre de Vies</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}