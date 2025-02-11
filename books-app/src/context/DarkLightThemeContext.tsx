import React from "react";

interface IDarkLightThemeContext {
  theme: string,
  setTheme: (theme:string) => void
}

// context for managing dark and light themes
export const DarkLightThemeContext = React.createContext<IDarkLightThemeContext>({theme: "light", setTheme: () => {}});

// func to toggle background color, text color based on dark/light theme
export const toggleTheme = (theme: string) => {
  return {
    backgroundColor: theme === "dark" ? "rgb(9,22,39)" : "rgb(244, 241, 234)",
    color: theme === "dark" ? "rgb(244, 241, 234)" : "rgb(27,27,29)",
  };
}

// func to toggle Outlet background color, text color based on dark/light theme
export const toggleThemeOutlet = (theme: string) => {
  return {
    backgroundColor: theme === "dark" ? "rgb(3,3,11)" : "rgb(249, 247, 244)",
    color: theme === "dark" ? "rgb(244, 241, 234)" : "rgb(27,27,29)",
  }
}
