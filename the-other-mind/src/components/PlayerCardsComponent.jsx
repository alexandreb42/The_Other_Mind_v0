import React, { useContext, useState } from "react"

export default function PlayerCardsComponent({cards}) {
    return(
        <>
        Cartes du joueur
        <ul>
            {cards && cards.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}