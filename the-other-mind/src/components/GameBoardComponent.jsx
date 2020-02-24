import React from "react"

export default function GameBoardComponent({GameModules}) {
    return(
        <ul>
            {GameModules.map(module => (
                <li>{module.name}</li>
            ))}
        </ul>
    )
}