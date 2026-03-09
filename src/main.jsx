import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/page.routes";

import "./main.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />,
);
