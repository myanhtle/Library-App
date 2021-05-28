import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function SearchBooks() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResults();
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  const fetchResults = () => {
    fetch("http://localhost:8080/mybooks/search?title=" + searchTitle)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        console.log(obj.items);
        setSearchResults(obj.items);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center p-2">
        <Form className="input-group w-50" onSubmit={handleSubmit}>
          <Form.Label htmlFor="bookInput" srOnly>
            Book Title
          </Form.Label>
          <Form.Control
            id="bookInput"
            size="lg"
            placeholder="Enter Book Title or Keyword"
            onChange={handleChange}
          />
          <Button className="input-group-append" type="submit" size="lg">
            Search
          </Button>
        </Form>
      </div>
      <ListGroup variant="flush">
        {searchResults.map((r) => (
          <ListGroup.Item key={r.id}>
            <div className="d-flex">
              <div>
                {r.volumeInfo.hasOwnProperty("imageLinks") ? (
                  <img
                    src={r.volumeInfo.imageLinks.smallThumbnail}
                    style={{ height: "20vh", paddingRight: "3vh" }}
                  />
                ) : (
                  ""
                )}
              </div>

              <div>
                <div>Title: {r.volumeInfo.title}</div>
                <div>
                  Author:
                  {r.volumeInfo.hasOwnProperty("authors")
                    ? " " + r.volumeInfo.authors
                    : ""}
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
