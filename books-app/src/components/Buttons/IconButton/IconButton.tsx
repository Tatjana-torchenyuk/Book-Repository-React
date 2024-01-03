
import { useContext } from "react";
import styles from "./IconButton.module.css";
import { DarkLightThemeContext } from "../../../context/DarkLightThemeContext";
import { FontSizeContext } from "../../../context/FontSizeContext";
import {Action} from "../../../enums";

interface IconButtonProps {
  iconLightTheme: string,
  iconDarkTheme: string,
  action: Action
}

// The IconButton component takes 3 props: one url path to icon image in light theme, one for in dark theme
// and a enum 'action' that defines different onClick action.
// useContext hook is used to acceess the theme value (= light or dark) from DarkLightThemeContext.
// useContext hook is used to acceess the largerFontSize value (= normal/larger font size) from FontSizeContext.
// The component renders a button based on the value of the 'action' prop.
// If action is Action.fontSize, it renders button for toggling between larger and normal font size.
// If action is Action.darkLight, it renders button for toggling between light and dark themes.

const IconButton = ({ iconLightTheme, iconDarkTheme, action }: IconButtonProps) => {
  const { theme, setTheme } = useContext(DarkLightThemeContext);
  const { largerFontSize, setLargerFontSize } = useContext(FontSizeContext);

  if (action === Action.fontSize) {
    return (
      <>
        {theme === "light" ?
          <button className={styles.lightBtn} onClick={() => setLargerFontSize(!largerFontSize)}><img src={iconLightTheme} alt="icon" /></button> :
          <button className={styles.darkBtn} onClick={() => setLargerFontSize(!largerFontSize)}><img src={iconDarkTheme} alt="icon" /></button>
        }
      </>
    )
  } else if (Action.darkLight) {
    return (
      <>
        {theme === "light" ?
          <button className={styles.lightBtn} onClick={() => setTheme("dark")}><img src={iconLightTheme} alt="icon" /></button> :
          <button className={styles.darkBtn} onClick={() => setTheme("light")}><img src={iconDarkTheme} alt="icon" /></button>
        }
      </>
    )
  }
}

export default IconButton;
