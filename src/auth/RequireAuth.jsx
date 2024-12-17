import React from "react";
import { useContextApi } from "../context/Context";
import { Navigate, useLocation } from "react-router";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useContextApi();
  if (!auth.user) {
    return <Navigate to="/Log-in" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
