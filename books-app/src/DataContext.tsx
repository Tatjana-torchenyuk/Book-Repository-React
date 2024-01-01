import React from "react";
import { Book } from "./types";


interface IDataContext {
  books: Book[]
}

// Create a context to hold the state "books"
const DataContext = React.createContext<IDataContext>({books: []});

export default DataContext;