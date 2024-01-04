import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./BookDetail.module.css";
import { Book } from "../../types";
import ProductDetailTable from "../ProductDetailTable/ProductDetailTable";


const BookDetail = () => {
  // get param from URL
  const { id } = useParams();
  const [currentBook, setCurrentBook] = useState<Book>();
  const [imgUrl, setImgUrl] = useState<string>("");

  const loadBookById = async (id: string) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const book: Book = await response.json();

    setCurrentBook(book);
    if (book.volumeInfo.imageLinks.small) {
      setImgUrl(book.volumeInfo.imageLinks.small.replace("http", "https"));
    } else {
      setImgUrl(book.volumeInfo.imageLinks.thumbnail);
    }
  }

  // Hook -> API call (side effect) is disconnected from the rest of our rendering code 
  // and the id must be included in the dependency array so that our callback func is called every time it changes.
  useEffect(() => {
    if (id) {
      loadBookById(id);
    }
  }, [id]);

  if (!currentBook) {
    <p>Loading...</p>
  }

  return (
    <main>
      {currentBook !== undefined && (<main className={styles.bookContainer}>
        <section className={styles.bookOverview}>
          <figure>
            <img src={imgUrl} alt={currentBook?.volumeInfo?.title || 'Book Cover'} />
          </figure>
          <div className={styles.bookContent}>
            <h1>{currentBook?.volumeInfo?.title}</h1>
            <p>by {currentBook?.volumeInfo?.authors}</p>
            <p className={styles.bookDescription}>{currentBook?.volumeInfo?.description}</p>
          </div>
        </section>
        <section className={styles.bookDetails}>
          <h2>Book Details</h2>
          <ProductDetailTable book={currentBook} />
        </section>
        <Link to="/books" className={styles.backBtn}>Back</Link>
      </main>)}
    </main>
  )
}

export default BookDetail;