import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../styles/auth.css";
import { loginUser } from "../../redux/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const login = useCallback((user, history) =>
    dispatch(loginUser(user, history), [dispatch])
  );

  const history = useHistory();

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
    login(userToConnect, history);
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
