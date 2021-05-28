import React, { useContext, useState } from "react";
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

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    addToLibrary(e.target.id);
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

  const addToLibrary = (index) => {
    const bookObj = {
      title: searchResults[index].volumeInfo.title,
      author: searchResults[index].volumeInfo.authors,
      preview: searchResults[index].volumeInfo.previewLink,
    };
    fetch("http://localhost:8080/mybooks/search/add", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
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
    }).then((response) => {
      return response;
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
        {searchResults.map((r, index) => (
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
                <div>
                  Title: <i>{r.volumeInfo.title}</i>
                </div>
                <div>
                  Author:
                  {r.volumeInfo.hasOwnProperty("authors")
                    ? " " + r.volumeInfo.authors
                    : ""}
                </div>
                <div className="py-2">{r.volumeInfo.description}</div>
                <Button size="sm" id={index} onClick={handleClick}>
                  Add to Library
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
