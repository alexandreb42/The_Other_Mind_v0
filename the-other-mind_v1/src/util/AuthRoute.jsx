import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const AuthRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector((state) => state.user.authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;