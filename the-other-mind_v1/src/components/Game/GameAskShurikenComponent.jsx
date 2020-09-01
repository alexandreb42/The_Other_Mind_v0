import React, { useContext, useState } from "react";

export default function GameAskShurikenComponent({ gameModules }) {
  const askShuriken = () => {
    console.log("method demander un shuriken");
  };
  return (
    <>
      <p>Demander un Shuriken</p>
      <ul>
        {gameModules && gameModules.map((module2) => <li>{module2.name}</li>)}
      </ul>
      <button onClick={askShuriken}>Demander un Shuriken</button>
    </>
  );
}
