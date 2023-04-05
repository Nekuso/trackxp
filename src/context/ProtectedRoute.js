import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, role, children }) => {
  if (user !== role) {
    return <Navigate to="/Home" replace />;
  }
  return children;
};

export default ProtectedRoute;
