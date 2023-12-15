import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import HomePage from "./components/HomePage/HomePage";
import BookListPage from "./components/BookListPage/BookListPage";
import BookDetailPage from "./components/BookDetailPage/BookDetailPage";
import { useEffect, useState } from "react";
import { Book, BookRoot } from "./types";

function App() {

  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    let response = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40&key=AIzaSyBVMDtwn5pFm22Y_GPm0scJi0pqEENSQ4A&langRestrict=en&printType=books&orderBy=newest");
    let BookRoot: BookRoot = await response.json();
    setBooks(BookRoot.items);
  }

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
          element: <BookListPage books={books}/>
        },
        {
          path: "books/:id",
          element: <BookDetailPage />
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App
