import { createContext } from "react";

import { defaultTheme } from "../../data/theme";

const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: (theme) => {
    theme;
  },
});

export default ThemeContext;
