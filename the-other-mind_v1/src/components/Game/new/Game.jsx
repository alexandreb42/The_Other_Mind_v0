import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../../../styles/game.scss";

const LEVEL = 3;
const PLAYERNUMBER = 4;

const Game = () => {
  const [level, setLevel] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  const generateRandomNumber = () => {
    return parseInt(100 * Math.random(), 10);
  };

  const randomizeDifferentsNumbers = (size) => {
    let array = [];
    for (let i = 0; i < size; i++) {
      let randomNumber = generateRandomNumber();
      const subArray = array;
      while (subArray.includes(randomNumber)) {
        randomNumber = generateRandomNumber();
      }
      array[i] = randomNumber;
    }
    return array;
  };

  const setTheArray = () => {
    const cards = randomizeDifferentsNumbers(LEVEL * PLAYERNUMBER);
    let k = 0;
    for (let i = 0; i < PLAYERNUMBER; i++) {
      let cardsLeft = [];
      for (let j = 0; j < LEVEL; j++) {
        cardsLeft[j] = cards[k];
        k++;
      }
      const player = {
        username: "player" + (i + 1),
        lifesLeft: 3,
        level: LEVEL,
        cardsLeft,
      };
      console.log(player);

      players.push(player);
    }
  };

  useEffect(() => {
    setLevel(LEVEL);

    setTheArray();

    setCurrentPlayer(players[0]);
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
