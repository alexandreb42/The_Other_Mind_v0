import React from "react";
import "../../../../src/styles/game.css";

const Stack = (props) => {
  return (
    <div className="stack">
      <p>{props.cardsLeft}</p>
    </div>
  );
};

export default Stack;
