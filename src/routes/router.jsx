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
        loader: () => fetch("/books.json").then((res) => res.json()),
        Component: Home,
      },
    ],
  },
]);

export default router;
