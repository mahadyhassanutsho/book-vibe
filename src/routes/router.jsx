import { createBrowserRouter } from "react-router";

import Root from "../pages/root/Root";
import Home from "../pages/home/Home";
import NotFound from "../pages/errors/NotFound";
import Book from "../pages/book/Book";

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
      {
        path: "/book/:id",
        loader: () => fetch("/books.json").then((res) => res.json()),
        Component: Book,
      },
    ],
  },
]);

export default router;
