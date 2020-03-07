import React, { useContext, useState } from "react"

export default function CreateInJoinComponent({cards}) {
    return(
        <>
        <p>Créerune partie</p>
        <ul>
            {cards && cards.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </>
    )
}