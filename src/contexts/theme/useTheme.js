import { useContext } from "react";

import ThemeContext from "./ThemeContext";

export default function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (themeContext) {
    return themeContext;
  } else {
    throw new Error("useTheme in only usable inside ThemeContext");
  }
}
