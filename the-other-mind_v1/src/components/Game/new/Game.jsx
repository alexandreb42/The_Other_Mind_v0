import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../../../../src/styles/game.css";

const PLAYERS = [
  {
    username: "player1",
    lifesLeft: 5,
    level: 4,
    cardsLeft: [45, 99, 54],
  },
  {
    username: "player2",
    lifesLeft: 1,
    level: 4,
    cardsLeft: [48, 25, 67],
  },
  {
    username: "player3",
    lifesLeft: 5,
    level: 4,
    cardsLeft: [31, 90, 55],
  },
  {
    username: "player4",
    lifesLeft: 3,
    level: 4,
    cardsLeft: [27, 78, 43],
  },
];

const Game = () => {
  const [level, setLevel] = useState(0);
  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  useEffect(() => {
    setCurrentPlayer(PLAYERS[0]);
    setLevel(4);
    setPlayers(PLAYERS);
  }, []);

  return (
    <div className="game-container">
      <header className="game-header">
        <h2>Niveau : {level}</h2>
        <h2>Vies restantes : {currentPlayer.lifesLeft}</h2>
      </header>
      <section className="game-section">
        {players.map((player, index) => (
          <div key={index} className={`game-cards-container-${index + 1}`}>
            {console.log(index + 1)}
            {player.cardsLeft.map((card, index) => (
              <Card
                key={index}
                value={card}
                display={player === currentPlayer}
              />
            ))}
          </div>
        ))}
      </section>
      <footer className="game-footer">
        <aside>Icone user</aside>
        <aside>Demander un shuriken </aside>
      </footer>
    </div>
  );
};

export default Game;
