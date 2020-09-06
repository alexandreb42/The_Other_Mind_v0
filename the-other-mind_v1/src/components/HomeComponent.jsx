import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../styles/home.css";
import IndexPlayComponent from "./Home/IndexPlayComponent";
import IndexBigTitleComponent from "./Home/IndexBigTitleComponent";
import IndexConnectionComponent from "./Home/IndexConnectionComponent";
import SocketComponent from "./SocketComponent";
import { logoutUser } from "../redux/actions/userActions";

export default function HomeComponent({ gameModules }) {
  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(logoutUser(), [dispatch]));

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="homeComponent">
      <IndexBigTitleComponent className="bigTitle" />
      <IndexPlayComponent />
      <IndexConnectionComponent />
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}
