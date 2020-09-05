import React, { useState, useEffect } from "react";
import "../../styles/auth.css";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userToConnect = {
      email,
      password,
    };
    axios
      .post("http://localhost:5000/api/auth/login", userToConnect)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data);
      })
      .catch((err) => console.log(err));
  };

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  const { email, password } = state;

  return (
    <div className="login-form">
      <input
        label="Email"
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        label="Mot de passe"
        type="password"
        placeholder="Mot de passe"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <input type="button" value="Se connecter" onClick={handleLogin} />
    </div>
  );
};

export default Login;
