import React, { useContext, useState } from "react"

export default function GameNbShurikenComponent({gameModules}) {
    return(
        <>
        <p>Nombre de Shuriken</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}