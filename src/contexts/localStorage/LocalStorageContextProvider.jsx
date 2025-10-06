import { useReducer, useEffect } from "react";

import LocalStorageContext from "./LocalStorageContext";

const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const ADD_TO_READLIST = "ADD_TO_READLIST";

const initialState = {
  readlist: JSON.parse(localStorage.getItem("readlist")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

console.log(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_READLIST:
      return { ...state, readlist: [...state.readlist, action.payload] };
    case ADD_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    default:
      return state;
  }
};

export default function LocalStorageContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToWishlist = (id) =>
    dispatch({ type: ADD_TO_WISHLIST, payload: id });
  const addToReadlist = (id) =>
    dispatch({ type: ADD_TO_READLIST, payload: id });

  useEffect(() => {
    localStorage.setItem("readlist", JSON.stringify(state.readlist));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state]);

  return (
    <LocalStorageContext
      value={{
        readlist: state.readlist,
        wishlist: state.wishlist,
        addToWishlist: addToWishlist,
        addToReadlist: addToReadlist,
      }}
    >
      {children}
    </LocalStorageContext>
  );
}
