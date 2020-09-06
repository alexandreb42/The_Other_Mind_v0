import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserData } from "../../redux/actions/userActions";
import axios from "axios";
import "../../styles/Menu/header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getUser = useCallback((id, history) =>
    dispatch(getUserData(id), [dispatch])
  );

  const authenticated = useSelector((state) => state.user.authenticated);

  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("enter in useEffect");
    axios
      .get(`http://localhost:5000/api/auth/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderAuthRoutes = () => {
    return authenticated ? (
      <li className="link">
        <Link to={`/users/${user._id}`}>Utilisateur</Link>
      </li>
    ) : (
      <>
        <li className="link">
          <Link to="/login">Se connecter</Link>
        </li>
        <li classsName="link">
          <Link to="/signup">S'inscrire</Link>
        </li>
      </>
    );
  };

  return (
    <div className="header">
      <div className="profil"></div>
      <div className="name">
        <p>Pseudo</p>
      </div>
      <ul className="onglets">
        <li className="link">
          <Link to="/">Accueil</Link>
        </li>
        <li className="link">
          <Link to="/game">Jouer !</Link>
        </li>
        <li className="link">
          <Link to="/create">Créer une partie</Link>
        </li>
        <li className="link">
          <Link to="/join">Rejoindre une partie</Link>
        </li>
        {renderAuthRoutes()}
      </ul>
    </div>
  );
}
export default Header;
