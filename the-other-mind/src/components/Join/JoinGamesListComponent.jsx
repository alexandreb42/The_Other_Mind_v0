import React, { useContext, useState } from "react"

export default function JoinGamesListComponent({cards}) {
    return(
        <>
        <p>Liste des parties</p>
        <ul>
            {cards && cards.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}