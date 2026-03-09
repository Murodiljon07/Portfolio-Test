import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex h-screen  justify-center items-center gap-4">
      <div>Enter just for you </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
