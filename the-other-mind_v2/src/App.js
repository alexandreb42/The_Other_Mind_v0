import React, { useState, createContext, useEffect } from 'react';

//import './styles/App.css';
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
