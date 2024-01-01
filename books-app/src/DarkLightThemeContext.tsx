import React from "react";

interface IDarkLightThemeContext {
  theme: string,
  setTheme: (theme:string) => void
  //getDarkLightThemeStyle: (theme:string) => void
}

export const DarkLightThemeContext = React.createContext<IDarkLightThemeContext>({theme: "light", setTheme: (theme: string) => {}});

export const toggleTheme = (theme: string) => {
  return {
    backgroundColor: theme === "dark" ? "rgb(27,27,29)" : "rgb(244, 241, 234)",
    color: theme === "dark" ? "rgb(244, 241, 234)" : "rgb(27,27,29)"
  };
}
