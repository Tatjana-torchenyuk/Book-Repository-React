import { Outlet, NavLink } from "react-router-dom";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <>
      <header>
        <nav className={styles.topNavigation}>
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="/" >Home</NavLink>
            </li>
            <li>
              <a href="/">
                <img src="./logo.png" alt="logo"/>
              </a>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="books">Books</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>&copy;2023 | BookVerse | Tatjana Torchenyuk</p>
      </footer>
    </>
  );
}

export default Root;