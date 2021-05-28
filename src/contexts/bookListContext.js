import React, { useState, createContext } from "react";
const BookListContext = createContext();

export default function BookListProvider({ children }) {
  const [books, setBooks] = useState([]);

  return (
    <BookListContext.Provider value={{ books, setBooks }}>
      {children}
    </BookListContext.Provider>
  );
}
export { BookListContext };
