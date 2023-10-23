import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRouteComponent = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectRouteComponent;
