import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import GameBoard from "./containers/GameBoard";
import PlayerCards from "./containers/PlayerCards";
import GameBoardComponent from "./components/GameBoardComponent";
import PlayerCardsComponent from "./components/PlayerCardsComponent";

function App() {
  return (
    <>
      <Router>
          <Link className="test" to="/">The Other Mind</Link>
          <Link to="/game">Jouer !</Link>
          <Link to="/create">Créer une partie</Link>
          <Link to="/join">Rejoindre une partie</Link>
          <Switch>
            <Route path="/game" component={GameBoardComponent}/>
            <Route path="/create" />
            <Route path="/join" />
            <Route path="/" />
          </Switch>
      </Router>
    </>
  );
}

export default App;

/*
return (
    <div className="Game">
      <GameBoard className="test" />
      <PlayerCards className="test" />
    </div>
  );
  */
