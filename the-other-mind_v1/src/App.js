import React from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./styles/App.css";
import Routes from "./Routes";

const token = localStorage.IdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  // si le token existe on le décode
  if (decodedToken.exp * 1000 < Date.now()) {
    // le token a une durée de vie de 24h (défini dans le backend)
    // au delà de 24h le token remis à une date normal (avec decodedToken.exp * 1000 pour les millisecondes) ne sera plus égal au moment présent
    // il aura expiré
    // en cas d'expiration on déconnecte l'user
    store.dispatch(logoutUser());
    // et on le renvoie à la page de connexion
    window.location.href = "/login";
  } else {
    // autrement, on dispatch une action de type SET_AUTHENTICATED qui aura pour effet d'enregistrer le token à travers le local storage
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
