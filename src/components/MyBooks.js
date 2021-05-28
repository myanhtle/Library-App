import React, { useContext, useEffect } from "react";
import BookCards from "./BookCards";
import { BookListContext } from "../contexts/bookListContext";

export default function MyBooks() {
  const { setBooks } = useContext(BookListContext);
  const { books } = useContext(BookListContext);

  useEffect(() => {
    fetch("http://localhost:8080/mybooks")
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        console.log(obj);
        setBooks(obj);
      });
  }, []);

  return (
    <div>
      <BookCards />
    </div>
  );
}
