import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";


const PageNotFound = () => {


  return (
    <main>
      <section className={styles.pageNotFound}>
        <p>Sorry, we couldn't find the page you were looking for.</p>
        <Link to="/">GO BACK TO HOME</Link>
      </section>
    </main>
  )
}

export default PageNotFound;