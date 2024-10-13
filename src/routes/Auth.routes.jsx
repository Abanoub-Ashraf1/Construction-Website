import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  // Check if the user is authenticated
  const isAuthenticated = userData && userData.email;

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
