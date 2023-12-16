import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import portal from "./assets/bookcase-portal.jpeg";

const HomePage = () => {

  return (
    <main>
      <h1>Welcome to BookVerse</h1>
      <figure>
        <Link to="/books"><img src={portal} className={styles.portal} alt="Image of bookcase with portal" /></Link>
      </figure>
      <section className={styles.introHome}>
        <p>Immerse yourself in the magical world of literature and explore a treasure trove of books based on authors, publication years, and genres.</p>
        <p>Whether you're searching for timeless classics, the latest releases, or a specific genre that ignites your passion, BookVerse has it all with just a few clicks.</p>
      </section>
    </main>
  );
}

export default HomePage;