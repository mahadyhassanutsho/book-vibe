import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "react-toastify/dist/ReactToastify.css";

/*
// NOTE: DaisyUI will handle the styling
import "react-tabs/style/react-tabs.css";
*/

import "./index.css";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
