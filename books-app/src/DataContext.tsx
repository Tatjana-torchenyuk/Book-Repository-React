import { createContext } from "react";
import { Book } from "./types";


interface DataContext {
  books: Book[]
}

// Create a context to hold the state "books"
const DataContext = createContext<DataContext>({books: []});

export default DataContext;