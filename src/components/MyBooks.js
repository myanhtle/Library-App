import React, { useContext, useEffect } from "react";
import { BookListContext } from "../contexts/bookListContext";

export default function MyBooks() {
  const { books } = useContext(BookListContext);
  const { setBooks } = useContext(BookListContext);

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
      {books.map((b) => (
        <li>
          {b.title}, {b.author}
        </li>
      ))}
    </div>
  );
}
