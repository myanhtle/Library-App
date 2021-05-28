import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCards from "./BookCards";
import { BookListContext } from "../contexts/bookListContext";
import Emoji from "react-emoji-render";

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
      <div className="p-3" style={{ fontSize: "5vh" }}>
        There are currently {books.length} books in your library
      </div>
      {books.length === 0 ? (
        <div style={{ paddingTop: "20vh" }}>
          <div className="d-flex justify-content-center p-3">
            <Emoji text="Oh no! :( Your library seems to be empty, let's fix that . . .  " />
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <Link to="/search" style={{ textDecoration: "none" }}>
                <Emoji text="Search Now 📚🏃‍♀️" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <BookCards />
      )}
    </div>
  );
}
