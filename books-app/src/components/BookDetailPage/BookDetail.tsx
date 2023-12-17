import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BookDetail.module.css";
import { Book } from "../../types";


const BookDetail = () => {
  // get param from URL
  const { id } = useParams();
  const [currentBook, setCurrentBook] = useState<Book>();
  const [imgUrl, setImgUrl] = useState<string>("");

  const loadBookById = async (id: string) => {
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    let book: Book = await response.json();

    setCurrentBook(book);
    if (book.volumeInfo.imageLinks.small) {
      setImgUrl(book.volumeInfo.imageLinks.small.replace("http", "https"));
    } else {
      setImgUrl(book.volumeInfo.imageLinks.thumbnail)
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
    <main className={styles.bookContainer}>
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
        <table className={styles.productDetailTable}>
          <tbody>
            <tr>
              <th>ISBN-10:</th>
              <td>{currentBook?.volumeInfo.industryIdentifiers[0].identifier}</td>
            </tr>
            <tr>
              <th>ISBN-13:</th>
              <td>{currentBook?.volumeInfo.industryIdentifiers[1].identifier}</td>
            </tr>
            <tr>
              <th>Publisher:</th>
              <td>{currentBook?.volumeInfo.publisher}</td>
            </tr>
            <tr>
              <th>Publication date:</th>
              <td>{currentBook?.volumeInfo.publishedDate}</td>
            </tr>
            <tr>
              <th>Pages:</th>
              <td>{currentBook?.volumeInfo.pageCount}</td>
            </tr>
          </tbody>
        </table>
      </section>

    </main>
  )
}

export default BookDetail;