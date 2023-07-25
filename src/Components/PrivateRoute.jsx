// src/PrivateRoute.js

import React from "react";
import { Link, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isAdmin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          isAdmin ? (
            <Component {...props} />
          ) : (
            <Link to="/userDashboard" />
          )
        ) : (
          <Link to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
