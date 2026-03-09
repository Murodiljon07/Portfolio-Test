import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/layouts/NavBar";

function PublicLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default PublicLayout;
