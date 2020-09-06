import React from "react";
import "../../../../src/styles/game.css";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.value}</p>
    </div>
  );
};

export default Card;
