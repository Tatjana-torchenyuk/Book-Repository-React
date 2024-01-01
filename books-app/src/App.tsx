import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import HomePage from "./components/HomePage/HomePage";
import BookList from "./components/BookListPage/BookList";
import BookDetail from "./components/BookDetailPage/BookDetail";
import { useEffect, useState } from "react";
import { Book, BookRoot } from "./types";
import DataContext from "./DataContext";
import { DarkLightThemeContext } from "./DarkLightThemeContext";

function App() {
  // Retrieved data is kept in state.
  const [books, setBooks] = useState<Book[]>([]);
  // Dark/Light theme
  const [theme, setTheme] = useState("light");

  const loadBooks = async () => {
    // API-specific query parameters:
    // - required parameter 'q', using keyword 'subject' to narrow the results where 'fiction' is listed in the category list of the volume,
    // - optional parameter 'maxResults', to get the maximum allowable number of 40 books,
    // - optional parameter 'printType', to further narrow the results to only books,
    // - optional parameter 'langRestrict', restricts the volumes returned to volumes in English
    // - optional parameter 'orderBy', to get the books with the latest publishedDate.

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40&key=${import.meta.env.VITE_API_KEY_BOOKS}&langRestrict=en&printType=books&orderBy=newest`);
    const BookRoot: BookRoot = await response.json();
    setBooks(BookRoot.items);
  }

  // Hook -> API call (side effect) is disconnected from the rest of our rendering code 
  // and the empty dependency array ensures that it is executed once after the 1st render
  useEffect(() => {
    loadBooks();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "books",
          element: <BookList />
        },
        {
          path: "books/:id",
          element: <BookDetail />
        }
      ]
    }
  ])

  return (
    <>
      {/* The value of the state is passed based on the context */}
      <DarkLightThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <DataContext.Provider value={{ books: books }}>
          <RouterProvider router={router} />
        </DataContext.Provider>
      </DarkLightThemeContext.Provider>
    </>
  );
}

export default App
