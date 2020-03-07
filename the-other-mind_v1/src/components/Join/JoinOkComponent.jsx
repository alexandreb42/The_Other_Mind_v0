import React, { useContext, useState } from "react"

export default function JoinOkComponent({cards}) {
    return(
        <>
        <p>Choisir cette partie</p>
        <ul>
            {cards && cards.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}