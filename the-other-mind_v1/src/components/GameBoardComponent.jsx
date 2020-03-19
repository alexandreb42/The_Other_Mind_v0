import React, { useContext, useState } from "react"

import '../styles/components/game.css';
import GamePlayerOneComponent from "./Game/GamePlayerOneComponent"
import GameOtherPlayerComponent from "./Game/GameOtherPlayerComponent"
import GameConnectionComponent from "./Game/GameConnectionComponent"
import GameAskShurikenComponent from "./Game/GameAskShurikenComponent"
import GameNbShurikenComponent from "./Game/GameNbShurikenComponent"
import GameNbLifesComponent from "./Game/GameNbLifesComponent"
import SocketComponent from "./SocketComponent";

export default function GameBoardComponent({gameModules}) {
    return(
        <div className="gameComponent">
            <p>La page Jouer !</p>
            <GamePlayerOneComponent />
            <GameOtherPlayerComponent />
            <GameConnectionComponent />
            <GameAskShurikenComponent />
            <GameNbShurikenComponent />
            <GameNbLifesComponent />
        </div>
    )
}