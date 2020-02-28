import React, { useContext, useState } from "react"

import GamePlayerOneComponent from "./Game/GamePlayerOneComponent"
import GameOtherPlayerComponent from "./Game/GameOtherPlayerComponent"
import GameConnectionComponent from "./Game/GameConnectionComponent"
import GameAskShurikenComponent from "./Game/GameAskShurikenComponent"
import GameNbShurikenComponent from "./Game/GameNbShurikenComponent"
import GameNbLifesComponent from "./Game/GameNbLifesComponent"

export default function GameBoardComponent({gameModules}) {
    return(
        <>
        <p>La page Jouer !</p>
        <ul>
            {gameModules && gameModules.map(module2 => (
                <li>{module2.name}</li>
            ))}
        </ul>
        <GamePlayerOneComponent />
        <GameOtherPlayerComponent />
        <GameConnectionComponent />
        <GameAskShurikenComponent />
        <GameNbShurikenComponent />
        <GameNbLifesComponent />
        </>
    )
}