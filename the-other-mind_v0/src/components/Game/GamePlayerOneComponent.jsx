import React, { useContext, useState } from "react"

export default function GamePlayerOneComponent({cards}) {
    return(
        <>
        <p>Cartes du joueur</p>
        <ul>
            {cards && cards.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}