import { Link } from "react-router-dom";
import styles from "./BookList.module.css";
import { useContext } from "react";
import DataContext from "../../DataContext";

// interface BooksListProps {
  
// }

const BookList = () => {
  const { books } = useContext(DataContext);

  return (
    <main>
      <h1>All books</h1>
      <section className={styles.booksContainer}>
        <div className={styles.bookFilter}>
          <h2>Filter</h2>
        </div>
        <div className={styles.bookList}>
          {books.map((book) => {
            return <article key={book.id}>
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

export default BookList;