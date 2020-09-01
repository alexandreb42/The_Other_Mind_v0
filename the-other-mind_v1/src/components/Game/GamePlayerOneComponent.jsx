import React, { useContext, useState } from "react";

export default function GamePlayerOneComponent({ cards }) {
  const playACard = () => {
    console.log("jouer une carte");
  };

  return (
    <>
      <p>Cartes du joueur</p>
      <ul>{cards && cards.map((module2) => <li>{module2.name}</li>)}</ul>
      <button onClick={playACard}>Jouer une carte</button>
    </>
  );
}
