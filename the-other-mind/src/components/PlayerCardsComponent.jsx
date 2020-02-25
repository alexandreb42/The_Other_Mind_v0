import React, { useContext, useState } from "react"

export default function PlayerCardsComponent({Cards}) {
    return(
        <ul>
            {Cards.map(module => (
                <li>{module.name}</li>
            ))}
        </ul>
    )
}