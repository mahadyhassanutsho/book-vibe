import { useContext } from "react";

import LocalStorageContext from "./LocalStorageContext";

export default function useLocalStorage() {
  const storage = useContext(LocalStorageContext);

  if (storage) {
    return storage;
  } else {
    throw new Error(
      "useLocalStorage can only be used inside LocalStorageContext"
    );
  }
}
