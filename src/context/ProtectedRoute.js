import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles, currentUser }) => {
  const user = currentUser || JSON.parse(localStorage.getItem("user"));
  if (!user || !user.role) {
    return "";
  }

  return allowedRoles.includes(user.role) ? children : <Navigate to="/Home/Orders" />;
};

export default ProtectedRoute;
