import { Link } from "react-router-dom";
import { Book } from "../../types";
import styles from "./DisplayCard.module.css";

interface DisplayCardProps {
  book: Book
}

const DisplayCard = ({ book }: DisplayCardProps) => {

  return (
    <article className={styles.bookCard}>
      <figure>
        <Link to={`/books/${book.id}`}>
          <img src={book.volumeInfo?.imageLinks.thumbnail} alt={book.volumeInfo?.title || 'Book Cover'} ></img>
        </Link>
      </figure>
      <div className={styles.bookInfo}>
        <Link to={`/books/${book.id}`}>{book.volumeInfo?.title}</Link>
        <div className={styles.authors}>
          by {book.volumeInfo?.authors.map((author, index) => <p key={index}>{author}</p>)}
        </div>
      </div>
    </article>
  )
}

export default DisplayCard;