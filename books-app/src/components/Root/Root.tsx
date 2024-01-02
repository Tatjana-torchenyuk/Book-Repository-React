import { Outlet, NavLink } from "react-router-dom";
import styles from "./Root.module.css";
import { DarkLightThemeContext, toggleTheme } from "../../DarkLightThemeContext";
import { useContext } from "react";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import plusMinusLight from "./assets/plus-minus-light.svg";
import plusMinusDark from "./assets/plus-minus-dark.svg";

const Root = () => {
  const { theme, setTheme } = useContext(DarkLightThemeContext);

  return (
    <div style={toggleTheme(theme)}>
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
          {theme == "light" ?
            <button className={styles.plusMinusLightBtn}><img src={plusMinusLight} alt="plus-minus icon" /></button> :
            <button className={styles.plusMinusDarkBtn}><img src={plusMinusDark} alt="plus-minus icon" /></button>
          }

          {theme === "light" ?
            <button className={styles.sunBtn} onClick={() => { setTheme("dark") }}><img src={sun} alt="moon icon" /></button> :
            <button className={styles.moonBtn} onClick={() => { setTheme("light") }}><img src={moon} alt="sun icon" /></button>
          }
        </div>
      </header>
      <div >
        <Outlet />
      </div>

      <footer style={toggleTheme(theme)} className={styles.footer}>
        <p>&copy;2023 BookVerse | Tatjana Torchenyuk</p>
      </footer>
    </div>
  );
}

export default Root;