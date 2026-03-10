import { createBrowserRouter } from "react-router-dom";

/* Layouts */
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";

/* Pages */
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import AdminLayout from "../layouts/AdminLayout";
import { path } from "../data/pathData";
import DashboardPage from "../pages/admin/DashboardPage";
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
    element: <ProtectRouter />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]);
