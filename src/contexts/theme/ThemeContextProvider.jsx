import { useState, useEffect } from "react";

import { defaultTheme } from "../../data/theme";
import ThemeContext from "./ThemeContext";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        setTheme: setTheme,
        theme: theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
