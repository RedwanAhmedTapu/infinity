// src/PrivateRoute.js

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  console.log(isAuthenticated);
  return isAuthenticated ? (
    //   isAdmin ? (
    //     // <Component {...props} />
    //   ) : (
    //     <Link to="/userDashboard" />
    //   )
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
