import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

import "./styles/Routes.css";
import Header from "./components/Menu/Header";
import Footer from "./components/Menu/Footer";
import HomeComponent from "./components/HomeComponent";
import GameBoardComponent from "./components/GameBoardComponent";
import CreateBoardComponent from "./components/CreateBoardComponent";
import JoinBoardComponent from "./components/JoinBoardComponent";
import Join from "./components/Socket/Join/Join";
import Chat from "./components/Socket/Chat/Chat";
import Login from "./components/Menu/Login";
import Signup from "./components/Menu/Signup";

function Routes() {
  return (
    <div>
      <Router class="menu">
        <Header />
        <Switch>
          <Route exact path="/">
            <Join />
            <HomeComponent />
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/chat" component={Chat} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

/*
        <Suspense fallback={<div>Chargement...</div>}>

        </Suspense>
*/

// 2 CHOIX POUR LA FORME DU MENU ...
/*
<>
  <Router class ="menu">
    <Link to="/">The Other Mind</Link>
    <Link to="/game">Jouer !</Link>
    <Link to="/create">Créer une partie</Link>
    <Link to="/join">Rejoindre une partie</Link>
    <Switch>
      <Route path="/game" component={GameBoardComponent}/>
      <Route path="/create" component={CreateBoardComponent}/>
      <Route path="/join" component={JoinBoardComponent}/>
      <Route exact path="/" component={HomeComponent}/>
    </Switch>
  </Router>
</>
*/

/*
<div>
  <Router class ="menu">
    <Header />
    <Switch>
      <Route exact path="/">
        <HomeComponent />
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
*/

export default Routes;
