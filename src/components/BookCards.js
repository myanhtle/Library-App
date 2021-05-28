import React, { useContext } from "react";
import { BookListContext } from "../contexts/bookListContext";
import CardDeck from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

export default function BookCards() {
  const { books } = useContext(BookListContext);
  return (
    <CardDeck className="p-3">
      {books.map((b) => (
        <Card>
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
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  );
}
