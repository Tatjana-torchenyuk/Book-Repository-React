import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import HomePage from "./components/HomePage/HomePage";
import BookList from "./components/BookListPage/BookList";
import BookDetail from "./components/BookDetailPage/BookDetail";
import { useEffect, useState } from "react";
import { Book, BookRoot } from "./types";
import DataContext from "./context/DataContext";
import { DarkLightThemeContext } from "./context/DarkLightThemeContext";
import { FontSizeContext } from "./context/FontSizeContext";
import ListViewContext from "./context/ListViewContext";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  // Retrieved data from the Google Books API is kept in state:
  const [books, setBooks] = useState<Book[]>([]);
  // Dark/Light theme state
  const [theme, setTheme] = useState("light");
  // Font size (larger/normal) state
  const [largerFontSize, setLargerFontSize] = useState(false);
  // List view state
  const [listView, setListView] = useState(false);

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

  // Inside the useEffect hook the function loadBooks() (= fetching the data) is called
  // and the empty dependency array ensures that it is executed once after the 1st render.
  useEffect(() => {
    loadBooks();
  }, []);

  // func for configuring a client-side router with main (root) route ("/") and 4 child routes.
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
        },
        {
          path: "*",
          element: <PageNotFound />
        }
      ]
    }
  ])

  return (
    <>
      {/* The context provider is making the value (and the setter func) available to any components inside the wrapper */}
      <ListViewContext.Provider value={{listView: listView, setListView: setListView}}>
      <FontSizeContext.Provider value={{largerFontSize: largerFontSize, setLargerFontSize: setLargerFontSize}}>
      <DarkLightThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <DataContext.Provider value={{ books: books }}>
          <RouterProvider router={router} />
      </DataContext.Provider>
      </DarkLightThemeContext.Provider>
      </FontSizeContext.Provider>
      </ListViewContext.Provider>
    </>
  );
}

export default App
