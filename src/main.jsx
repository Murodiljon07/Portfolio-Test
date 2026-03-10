import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/page.routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./toolkit/store";

import "./main.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} /> <ToastContainer />
  </Provider>,
);
