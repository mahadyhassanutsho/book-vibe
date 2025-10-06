import { createContext } from "react";

import themes from "../../data/theme";

const ThemeContext = createContext({
  theme: themes[0],
  setTheme: (theme) => {
    theme;
  },
});

export default ThemeContext;
