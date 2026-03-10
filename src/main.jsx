import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/page.routes";
import { ToastContainer } from "react-toastify";

import "./main.css";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} /> <ToastContainer />
  </>,
);
