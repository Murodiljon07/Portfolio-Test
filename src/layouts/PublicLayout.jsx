import React from "react";
import { Outlet } from "react-router-dom";

/* components */
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";

function PublicLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="flex justify-center items-center bg-[#0A0A14] text-[#99A1AF] py-8 px-3">
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
