import React from "react";

import { aboutReq } from "../../services/about.service";
import { Outlet } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DashboardPage;
