import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BookDetail.module.css";
import { Book } from "../../types";


const BookDetail = () => {
  // get param from URL
  const { id } = useParams();
  const [currentBook, setCurrentBook] = useState<Book>();

  const loadBookById = async (id: string) => {
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    let book: Book = await response.json();
    setCurrentBook(book);
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
    <main className={styles.bookContainer}>
      <section className={styles.bookOverview}>
        <figure>
          <img src={currentBook?.volumeInfo?.imageLinks.medium || currentBook?.volumeInfo?.imageLinks.thumbnail} alt={currentBook?.volumeInfo?.title || 'Book Cover'} />
        </figure>
        <div className={styles.bookContent}>
          <h1>{currentBook?.volumeInfo?.title}</h1>
          <p>{currentBook?.volumeInfo?.authors}</p>
          <p>{currentBook?.volumeInfo?.description}</p>
        </div>
      </section>
      <section className={styles.bookDetails}>
        <h2>Book Details</h2>
        <table className={styles.productDetailTable}>
          
        </table>
      </section>

    </main>
  )
}

export default BookDetail;