import React, { useContext, useState } from "react"

export default function GameAskShurikenComponent({gameModules}) {
    return(
        <>
        <p>Demander un Shuriken</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}