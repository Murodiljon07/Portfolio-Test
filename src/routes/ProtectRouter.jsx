import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectRouter() {
  const token = localStorage.getItem("token");

  return token ? (
    <Outlet />
  ) : (
    (toast.warning("Enter with login"),
    (<Navigate to={"/auth/login"} replace />))
  );
}

export default ProtectRouter;
