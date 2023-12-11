import styles from "./HomePage.module.css";
import bookcaseImg from "./assets/bookcase-portal.jpeg";

const HomePage = () => {

    return (
        <main>
            <figure>
                <img src={bookcaseImg} alt="Image of bookcase with portal" />
            </figure>
            <section>
                Welcome to BookVerse.
            </section>
        </main>
    );
}

export default HomePage;