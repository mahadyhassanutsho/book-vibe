import { createBrowserRouter } from "react-router";

import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import NotFound from "../pages/errors/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
