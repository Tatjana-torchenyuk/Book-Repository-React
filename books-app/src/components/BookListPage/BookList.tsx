import { Link } from "react-router-dom";
import styles from "./BookList.module.css";
import { useContext, useState } from "react";
import DataContext from "../../DataContext";
import FilterButton from "../FilterButton/FilterButton";
import { Book } from "../../types";

// interface BooksListProps {

// }

const BookList = () => {
  const { books } = useContext(DataContext);
  const [filterChoice, setFilterChoice] = useState<string>("");
  const [filterOnAuthor, setFilterOnAuthor] = useState<string>("");
  const [filterOnGenre, setFilterOnGenre] = useState<string>("");
  const [filterOnRating, setFilterOnRating] = useState<string>("");
  console.log(filterChoice);
  // filter books based on change in the filterOnAuthor state
  const getFilteredBooks = (books: Book[], filterType: string): Book[] => {
    let filteredBooks: Book[] = [...books]
    switch (filterType) {
      case ("Author"):
        filteredBooks = books.filter(book => {
          if (book.volumeInfo.authors.length > 1) {
            // if multiple authors are present, then return needed boolean when author name starts with state input
            return book.volumeInfo.authors.map(author => author.toUpperCase().startsWith(filterOnAuthor));
          } else {
            return book.volumeInfo.authors[0].toUpperCase().startsWith(filterOnAuthor.toUpperCase());
          }
        });
        break;
      case ("Genre"):
        // todo: filter by genre
        break;
      case ("Rating"):
        // todo: filter by rating
        break;
    }
    return filteredBooks;

  }
  const filteredBooks = getFilteredBooks(books, filterChoice);

  return (
    <main>
      <h1>All books</h1>
      <section className={styles.booksContainer}>

        {/* Filters */}
        <div className={styles.bookFilter}>
          <h2>Filter</h2>
          <FilterButton filterCriteria="Author" filterValue={filterOnAuthor} setFilterValue={setFilterOnAuthor} setFilterChoice={setFilterChoice} />
          <FilterButton filterCriteria="Genre" filterValue={filterOnGenre} setFilterValue={setFilterOnGenre} setFilterChoice={setFilterChoice} />
          <FilterButton filterCriteria="Rating" filterValue={filterOnRating} setFilterValue={setFilterOnRating} setFilterChoice={setFilterChoice} />
        </div>

        {/* List of 40 books */}
        <div className={styles.bookList}>
          {filteredBooks.map((book) => {
            return <article key={book.id}>

              <figure>
                <Link to={`/books/${book.id}`}>
                  <img src={book.volumeInfo?.imageLinks.thumbnail} alt={book.volumeInfo?.title || 'Book Cover'} ></img>
                </Link>
              </figure>

              <div>
                <Link to={`/books/${book.id}`}>{book.volumeInfo?.title}</Link>
                <div>by {book.volumeInfo?.authors.map((author, index) => <p key={index}>{author}</p>)}</div>
              </div>

            </article>
          })}
        </div>
      </section>
    </main>
  )
}

export default BookList;