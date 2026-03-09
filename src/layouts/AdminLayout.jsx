import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminNavBar from "../components/layouts/AdminNavBar";

function AdminLayout() {
  return (
    <div className="bg-[#0F0F1E] h-screen">
      <header>
        <aside className="h-[100px] w-full bg-amber-500">
          <Link to={"/"}>GO Home</Link>
        </aside>
        <AdminNavBar />
      </header>
      <main className="overflow-y-auto h-full py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
