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
  
  console.log(currentBook?.volumeInfo?.description);

  if (!currentBook) {
    <p>Loading...</p>
  }
  return (
    <main>
      This is the detail page.
      {currentBook?.volumeInfo?.description}
    </main>
  )
}

export default BookDetail;