import React, { useState, useEffect } from "react";
import "../../styles/auth.css";
import axios from "axios";

const Signup = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [message, setMessage] = useState("");
  const [createdOrNot, setCreatedOrNot] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const userToCreate = {
      email,
      password,
    };
    axios
      .post("http://localhost:5000/api/auth/signup", userToCreate)
      .then((response) => {
        setMessage(response.data);
        // setCreatedOrNot(true);
      })
      .catch((err) => console.log(err));
  };

  //   const renderMessage = () => <p>{message}</p>;

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  const { email, password, confirmPassword } = state;

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
      <input
        label="Confirmer le mot de passe"
        type="password"
        placeholder="Mot de passe"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />
      <input type="button" value="S'inscrire" onClick={handleSignup} />
      {/* {createdOrNot && { renderMessage }} */}
    </div>
  );
};

export default Signup;
