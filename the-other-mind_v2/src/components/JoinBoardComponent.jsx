import React, { useContext, useState } from "react"
/*
import '../styles/join.css';
import JoinGameInfosComponent from "./Join/JoinGameInfosComponent"
import CreateInJoinComponent from "./Join/CreateInJoinComponent"
import JoinGamesListComponent from "./Join/JoinGamesListComponent"
import JoinSearchBarComponent from "./Join/JoinSearchBarComponent"
*/

export default function JoinBoardComponent({cards}) {
    return(
        <div className="joinComponent">
        <p>La page Rejoindre !</p>
        <ul>
            {cards && cards.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        </div>
    )
}