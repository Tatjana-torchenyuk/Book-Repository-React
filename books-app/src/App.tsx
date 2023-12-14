import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import HomePage from "./components/HomePage/HomePage";
import BookListPage from "./components/BookListPage/BookListPage";
import BookDetailPage from "./components/BookDetailPage/BookDetailPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <HomePage/>
        },
        {
          path: "books",
          element: <BookListPage/>
        }, 
        {
          path: "books/:id",
          element: <BookDetailPage/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App
