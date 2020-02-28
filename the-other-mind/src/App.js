import React, { useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';

import './App.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import GameBoardComponent from "./components/GameBoardComponent";
import CreateBoardComponent from "./components/CreateBoardComponent";
import JoinBoardComponent from './components/JoinBoardComponent';

const store = configureStore();

function App() {
  return (
      <>
          <Router className="test">
            <Link to="/">The Other Mind</Link>
            <Link to="/game">Jouer !</Link>
            <Link to="/create">Créer une partie</Link>
            <Link to="/join">Rejoindre une partie</Link>
            <Switch>
              <Route path="/game" component={GameBoardComponent}/>
              <Route path="/create" component={CreateBoardComponent}/>
              <Route path="/join" component={JoinBoardComponent}/>
              <Route path="/" />
            </Switch>
        </Router>
      </>
  );
}

export default App;
