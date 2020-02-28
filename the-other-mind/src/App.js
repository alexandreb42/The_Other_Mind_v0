import React, { useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';

import './styles/App.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import Routes from './Routes';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
