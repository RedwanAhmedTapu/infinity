// src/PrivateRoute.js

import React from "react";
import { Link, Outlet, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          //   isAdmin ? (
          //     // <Component {...props} />
          //   ) : (
          //     <Link to="/userDashboard" />
          //   )
          <Outlet {...props} />
        ) : (
          <Link to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
