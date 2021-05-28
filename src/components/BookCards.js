import React, { useContext } from "react";
import { BookListContext } from "../contexts/bookListContext";
import { nanoid } from "nanoid";
import CardDeck from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function BookCards() {
  const { books } = useContext(BookListContext);
  const { setBooks } = useContext(BookListContext);

  const handleDelete = (index) => {
    const bookObj = books[index];
    const b = books;
    fetch("http://localhost:8080/mybooks/delete", {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(bookObj), // body data type must match "Content-Type" header
    })
      .then((response) => {
        return response;
      })
      .then(() => {
        setBooks(b.filter((book, i) => i !== index));
      });
  };

  const openPreview = (e) => {
    e.preventDefault();
    window.open(books[e.target.id].preview);
  };

  return (
    <CardDeck className="p-3">
      {books.map((b, i) => (
        <Card key={nanoid()}>
          <Card.Img
            variant="top"
            src="https://www.colorado.edu/libraries/sites/default/files/styles/medium/public/article-image/adobestock_323624455.jpeg?itok=ngNHOLvG"
            style={{ height: "15vh" }}
          />
          <Card.Body>
            <Card.Title>{b.title}</Card.Title>
            <Card.Text>Author: {b.author}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button id={i} size="sm" onClick={() => handleDelete(i)}>
              delete
            </Button>
            <Button className="m-1" id={i} size="sm" onClick={openPreview}>
              Preview Book
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  );
}
