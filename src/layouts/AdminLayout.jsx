import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import ProfileAside from "../pages/admin/ProfileAside";

function AdminLayout() {
  toast.success("Muvofaqiyatli kirildi");

  return (
    <div className="flex">
      <ProfileAside />
      <main className="flex flex-col justify-center items-center w-full ">
        <div className="h-10 bg-amber-400 w-[80%] flex gap-1">
          <Link to={"dashboard"}>dashboard</Link>
          <Link to={"experians"}>experians</Link>
          <Link to={"contact"}>contact</Link>
          <Link to={"projects"}>projects</Link>
          <Link to={"skills"}>skills</Link>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
