import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex h-screen  justify-center items-center gap-4 bg-[#0F0F1EF2]">
      <div className="bg-[#1A1A2E] h-[250px] p-12 rounded-2xl border border-[#363654] text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
