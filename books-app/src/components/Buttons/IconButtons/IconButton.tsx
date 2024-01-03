
import { useContext } from "react";
import styles from "./IconButton.module.css";
import { DarkLightThemeContext } from "../../../context/DarkLightThemeContext";
import { FontSizeContext } from "../../../context/FontSizeContext";

interface IconButtonProps {
  iconLightTheme: string,
  iconDarkTheme: string,
  action: string
}

const IconButton = ({ iconLightTheme, iconDarkTheme, action }: IconButtonProps) => {
  const { theme, setTheme } = useContext(DarkLightThemeContext);
  const { largerFontSize, setLargerFontSize } = useContext(FontSizeContext);
  if (action.toLowerCase() === "fontsize") {
    return (
      <>
        {theme.toLowerCase() == "light" ?
          <button className={styles.lightBtn} onClick={() => setLargerFontSize(!largerFontSize)}><img src={iconLightTheme} alt="icon" /></button> :
          <button className={styles.darkBtn} onClick={() => setLargerFontSize(!largerFontSize)}><img src={iconDarkTheme} alt="icon" /></button>
        }
      </>
    )
  } else if (action.toLowerCase() === "darklight") {
    return (
      <>
        {theme.toLowerCase() == "light" ?
          <button className={styles.lightBtn} onClick={() => setTheme("dark")}><img src={iconLightTheme} alt="icon" /></button> :
          <button className={styles.darkBtn} onClick={() => setTheme("light")}><img src={iconDarkTheme} alt="icon" /></button>
        }
      </>
    )
  }
}

export default IconButton;
