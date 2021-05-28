import React, { useContext } from "react";
import { BookListContext } from "../contexts/bookListContext";
import { nanoid } from "nanoid";
import CardDeck from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function BookCards() {
  const { books } = useContext(BookListContext);
  const { setBooks } = useContext(BookListContext);

  const handleDelete = () => {};

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
            <Button id={i} size="sm" onClick={handleDelete}>
              delete
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  );
}
