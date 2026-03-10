import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRouter() {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to={"/auth/login"} replace />;
}

export default ProtectRouter;
