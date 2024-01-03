import { Outlet, NavLink } from "react-router-dom";
import styles from "./Root.module.css";
import { DarkLightThemeContext, toggleTheme, toggleThemeOutlet } from "../../context/DarkLightThemeContext";
import { useContext } from "react";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import plusMinusLight from "./assets/plus-minus-light.svg";
import plusMinusDark from "./assets/plus-minus-dark.svg";
import { FontSizeContext, toggleFontSize } from "../../context/FontSizeContext";
import IconButton from "../Buttons/IconButtons/IconButton";

const Root = () => {
  // context for dark/light theme
  const { theme } = useContext(DarkLightThemeContext);
  // context for larger/normal font size
  const { largerFontSize } = useContext(FontSizeContext);

  return (
    // Combine multiple objects for style using spread operator
    <div style={{...toggleTheme(theme), ...toggleFontSize(largerFontSize)}}>

      <header style={toggleTheme(theme)} className={styles.header}>
        <div style={{width:"115px"}}></div>
        <nav className={styles.topNavigation}>
          <ul>
            <li >
              <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/"><img src="./assets/images/logo.png" alt="logo" /></NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="books">Books</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.icons}>
            <IconButton iconLightTheme={plusMinusLight} iconDarkTheme={plusMinusDark} action="fontsize"/>
            <IconButton iconLightTheme={sun} iconDarkTheme={moon} action="darklight"/>
        </div>
      </header>

      <div style={toggleThemeOutlet(theme)}>
        <Outlet />
      </div>

      <footer style={toggleTheme(theme)} className={styles.footer}>
        <p>&copy;2023 BookVerse | Tatjana Torchenyuk</p>
      </footer>

    </div>
  );
}

export default Root;