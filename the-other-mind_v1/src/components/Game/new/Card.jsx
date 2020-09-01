import React from "react";
import "../../../../src/styles/game.css";

const Card = (props) => {
  return (
    <div className="card">
      <p className={`${props.display ? "" : "hidden-card"}`}>{props.value}</p>
    </div>
  );
};

export default Card;
