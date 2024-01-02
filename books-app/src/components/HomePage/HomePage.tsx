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
        <p>Immerse yourself in the magical world of literature and explore a treasure trove of newly released books.</p>
      </section>
    </main>
  );
}

export default HomePage;