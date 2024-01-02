import React from "react";

interface IDarkLightThemeContext {
  theme: string,
  setTheme: (theme:string) => void
}

export const DarkLightThemeContext = React.createContext<IDarkLightThemeContext>({theme: "light", setTheme: (theme: string) => {}});

export const toggleTheme = (theme: string) => {
  return {
    backgroundColor: theme === "dark" ? "rgb(9,22,39)" : "rgb(244, 241, 234)",
    color: theme === "dark" ? "rgb(244, 241, 234)" : "rgb(27,27,29)",
    // boxShadow: theme === "dark" ? "0 1px 2px rgb(235,77,65)" : "0 1px 2px rgb(33,33,104)"
  };
}

export const toggleThemeOutlet = (theme: string) => {
  return {
    backgroundColor: theme === "dark" ? "rgb(3,3,11)" : "rgb(249, 247, 244)",
    color: theme === "dark" ? "rgb(244, 241, 234)" : "rgb(27,27,29)",
    //boxShadow: theme === "dark" ? "0 1px 2px rgb(235,77,65)" : "0 1px 2px rgb(33,33,104)"
  }
}
