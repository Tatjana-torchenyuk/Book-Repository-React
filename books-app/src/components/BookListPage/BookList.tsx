import styles from "./BookList.module.css";
import DataContext from "../../context/DataContext";
import { useContext, useEffect, useState } from "react";
import { Book } from "../../types";
import FilterTextField from "../Filters/FilterTextField/FilterTextField";
import FilterSlider from "../Filters/FilterSlider/FilterSlider";
import DisplayCard from "../DisplayCard/DisplayCard";
import IconButton from "../Buttons/IconButton/IconButton";
import sortIcon from "../Buttons/assets/sort-down.svg";
import sortDarkIcon from "../Buttons/assets/sort-down-dark.svg";
import gridIcon from "../Buttons/assets/grid.svg";
import gridDarkIcon from "../Buttons/assets/grid-dark.svg";
import listIcon from "../Buttons/assets/list.svg";
import listDarkIcon from "../Buttons/assets/list-dark.svg";
import { Action } from "../../enums";
import SortButton from "../Buttons/SortButton/SortButton";

const BookList = () => {
  const { books } = useContext(DataContext);
  const [filterChoice, setFilterChoice] = useState<string>("");
  const [filterOnAuthor, setFilterOnAuthor] = useState<string>("");
  const [filterOnGenre, setFilterOnGenre] = useState<string>("");
  const [filterOnRating, setFilterOnRating] = useState<number>(0);
  const [sorted, setSorted] = useState<boolean>(false);
  const [modifiedBooks, setModifiedBooks] = useState<Book[]>([]);

  // filter the array of books on author, genre or rating 
  // and return an array of filtered books
  const getFilteredBooks = (books: Book[], filterType: string): Book[] => {
    let filteredBooks: Book[] = [...books];
    
    switch (filterType) {
      // filter books based on change in the state filterOnAuthor
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
        // filter books based on change in the state filterOnGenre
      case ("Genre"):
        filteredBooks = books.filter(book => {
          return book.volumeInfo.categories[0].toUpperCase().includes(filterOnGenre.toUpperCase());
        });
        break;
        // filter books based on change in the state filterOnRating
      case ("Rating"):
        filteredBooks = books.filter(book => {
          if (filterOnRating !== undefined) {
            if (book.volumeInfo.averageRating === undefined && filterOnRating === 0) {
              return books;
            } else if (filterOnRating > 0 || filterOnRating <= 10) {
              return book.volumeInfo.averageRating >= filterOnRating;
            }
          }
        });
        break;
    }
    return filteredBooks;
  }

  // call function getFilteredBooks to filter the books
  const filteredBooks = getFilteredBooks(modifiedBooks, filterChoice);

  // function that sorts the books by title, first in ascending order, and if the button
  // is clicked second time, in descending order 
  const handleSort = () => {
    const sortedBooks:Book[] = [...books];
    if(sorted) {
      sortedBooks.sort((a, b) => {
        return a.volumeInfo.title < b.volumeInfo.title ? 1 : -1
      });

      setModifiedBooks(sortedBooks);
      setSorted(false);
    } else {
      sortedBooks.sort((a, b) => {
        return a.volumeInfo.title > b.volumeInfo.title ? 1 : -1
      });

      setModifiedBooks(sortedBooks);
      setSorted(true);
    }
  }
  
  // Whenever the books dependency changes, the useEffect hook will be triggered.
  // The state variable modifiedBooks is empty by default.
  // That's why inside useEffect func, setModifiedBooks(books) is called,
  // and this updates the state variable modifiedBooks with the current value of the books prop.
  
  useEffect(() => {
    setModifiedBooks(books);
  }, [books])

  return (
    <main>
      <section>
        <h1>All books</h1>
      </section>
      <section className={styles.booksContainer}>
        {/* Filters */}
        <div className={styles.bookFilter}>
          <h2>Filter</h2>
          <FilterTextField filterCriteria="Author" filterValue={filterOnAuthor} setFilterValue={setFilterOnAuthor} setFilterChoice={setFilterChoice} />
          <FilterTextField filterCriteria="Genre" filterValue={filterOnGenre} setFilterValue={setFilterOnGenre} setFilterChoice={setFilterChoice} />
          <FilterSlider filterCriteria="Rating" filterValue={filterOnRating} setFilterValue={setFilterOnRating} setFilterChoice={setFilterChoice} />
        </div>
        <div>
          {/* Iconbutton for sorting, grid-layout, list-layout */}
          <div className={styles.iconButtons}>
            <SortButton iconLightTheme={sortIcon} iconDarkTheme={sortDarkIcon} handleSort={handleSort}/>
            <IconButton iconLightTheme={gridIcon} iconDarkTheme={gridDarkIcon} action={Action.gridLayout} />
            <IconButton iconLightTheme={listIcon} iconDarkTheme={listDarkIcon} action={Action.listLayout} />
          </div>
          {/* List of 40 books */}
          <div className={styles.bookList}>
            {filteredBooks.map((book) => {
              return (
                <DisplayCard book={book} key={book.id} />
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BookList;