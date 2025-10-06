import { createContext } from "react";

const LocalStorageContext = createContext({
  readlist: [],
  wishlist: [],
  addToReadlist: (id) => {
    id;
  },
  addToWishlist: (id) => {
    id;
  },
});

export default LocalStorageContext;
