import React, { useContext, useState } from "react"

export default function JoinSearchBarComponent({cards}) {
    return(
        <>
        <p>Chercher une partie</p>
        <ul>
            {cards && cards.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}