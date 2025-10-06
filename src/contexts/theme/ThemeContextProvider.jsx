import { useState } from "react";

import themes from "../../data/theme";
import ThemeContext from "./ThemeContext";
import { useEffect } from "react";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themes[0]);

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
