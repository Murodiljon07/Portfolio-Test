import { Outlet } from "react-router-dom";
import ProfileAside from "../components/admin/ProfileAside";

function AdminLayout() {
  return (
    <div className="flex">
      <ProfileAside />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
