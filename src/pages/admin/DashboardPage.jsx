import { toast } from "react-toastify";
import { Outlet } from "react-router-dom";

function DashboardPage() {
  toast.success("Muvofaqiyatli kirildi");
  return (
    <header>
      dlknoi
      <main>
        <Outlet />
      </main>
    </header>
  );
}

export default DashboardPage;
