import { Outlet, NavLink } from "react-router-dom";
import styles from "./Root.module.css";
import { DarkLightThemeContext, toggleTheme } from "../../DarkLightThemeContext";
import { useContext } from "react";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";

const Root = () => {
  const {theme, setTheme} = useContext(DarkLightThemeContext);

  return (
    <div style={toggleTheme(theme)}>
      <header style={toggleTheme(theme)} className={styles.header}>
        <div></div>
        <nav className={styles.topNavigation}>
          <ul>
            <li >
              <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/"><img src="./assets/images/logo.png" alt="logo"/></NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="books">Books</NavLink>
            </li>
          </ul>
        </nav>
        {theme === "light" ?
        <button className={styles.sunBtn} onClick={() => {setTheme("dark")}}><img src={sun} alt="moonIcon" /></button>:
        <button className={styles.moonBtn} onClick={() => {setTheme("light")}}><img src={moon} alt="sunIcon" /></button>
        
        }
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