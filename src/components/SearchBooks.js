import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SearchBooks() {
  const handleSubmit = (e) => {};
  const handleChange = (e) => {};

  return (
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
  );
}
