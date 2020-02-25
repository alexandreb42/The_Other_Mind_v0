import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import GameBoard from "./containers/GameBoard";
import PlayerCards from "./containers/PlayerCards";

function App() {
  return (
    <div className="Game">
      <GameBoard className="test" />
      <PlayerCards className="test" />
    </div>
  );
}

export default App;
