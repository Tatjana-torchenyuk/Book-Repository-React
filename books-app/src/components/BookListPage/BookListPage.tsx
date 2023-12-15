import { Link } from "react-router-dom";
import { Book } from "../../types";
import styles from "./BookListPage.module.css";

interface BooksListPageProps {
    books: Book[]
}

const BookListPage = ({ books }: BooksListPageProps) => {

    return (
        <main>
            <h1>All books</h1>
            <p>New, interesting, and unexpected books you don't want to miss.</p>
            <section className={styles.booksContainer}>
                <div className={styles.bookFilter}>
                    <h2>Filter</h2>
                </div>
                <div className={styles.bookList}>
                    {books.map((book, index) => {
                        return <article key={index}>
                            <figure>
                                <Link to={`/books/${book.id}`}>
                                    <img src={book.volumeInfo?.imageLinks.thumbnail} alt={book.volumeInfo?.title || 'Book Cover'} ></img>
                                </Link>
                            </figure>
                            <div>
                                <Link to={`/books/${book.id}`}>{book.volumeInfo?.title}</Link>
                                <p>by {book.volumeInfo?.authors}</p>
                            </div>
                        </article>
                    })}
                </div>
            </section>
        </main>
    )
}

export default BookListPage;