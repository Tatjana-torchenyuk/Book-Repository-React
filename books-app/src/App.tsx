import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import HomePage from "./components/HomePage/HomePage";

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
          path: "/books",
          element: <></>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App
