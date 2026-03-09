import { createBrowserRouter } from "react-router-dom";

/* Layouts */
import PublicLayout from "../layouts/PublicLayout";

/* Pages */
import HomePage from "../pages/public/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
