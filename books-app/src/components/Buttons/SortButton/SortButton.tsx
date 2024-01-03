import { useContext } from "react";
import { DarkLightThemeContext } from "../../../context/DarkLightThemeContext";
import styles from "./SortButton.module.css";

interface SortButtonProps {
  iconLightTheme: string,
  iconDarkTheme: string,
  handleSort: () => void
}

// useContext hook is used to acceess the theme value (= light or dark) from DarkLightThemeContext.
// The SortButton takes 3 props: one url path to icon image in light theme, and one for in dark theme
// and a func handleSort that is called when button is clicked.
// If the theme is light, then a button with class styles.lightBtn and light theme icon is rendered.
// If the theme is dark, then a button with class styles.darkBtn and dark theme icon is rendered.
const SortButton = ({ iconLightTheme, iconDarkTheme, handleSort}: SortButtonProps) => {
  const { theme } = useContext(DarkLightThemeContext);

  return (
    <>
      {theme === "light" ?
        <button className={styles.lightBtn}><img src={iconLightTheme} alt="icon" onClick={handleSort}/></button> :
        <button className={styles.darkBtn}><img src={iconDarkTheme} alt="icon" onClick={handleSort}/></button>
      }
    </>
  )
}

export default SortButton;