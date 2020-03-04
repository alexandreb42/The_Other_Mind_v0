import React, {Suspense, lazy} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import './styles/Routes.css';
import Header from './components/Menu/Header';
import Footer from './components/Menu/Footer';
import Home from './components/HomeComponent';
import GameBoardComponent from "./components/GameBoardComponent";
import CreateBoardComponent from "./components/CreateBoardComponent";
import JoinBoardComponent from './components/JoinBoardComponent';

function Routes() {
  return (
    <div>
      <Router class ="menu">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <GameBoardComponent />
          </Route>
          <Route path="/create">
            <CreateBoardComponent />
          </Route>
          <Route path="/join">
            <JoinBoardComponent />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

/*

        <Suspense fallback={<div>Chargement...</div>}>

        </Suspense>

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
*/

export default Routes;