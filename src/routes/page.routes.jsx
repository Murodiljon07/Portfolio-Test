import { createBrowserRouter } from "react-router-dom";

/* Layouts */
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";

/* public pages */
import HomePage from "../pages/public/HomePage";

/* auth page */
import LoginPage from "../pages/auth/LoginPage";

/* admin page */
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import ExperiansCustom from "../components/admin/ExperiansCustom";

/* protect */
import ProtectRouter from "./ProtectRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
          {
            index: true,
            element: <ExperiansCustom />,
          },
        ],
      },
    ],
  },
]);
