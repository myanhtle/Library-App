import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Navbar.Brand>My Personal Library</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link
              className="text-secondary"
              to="/"
              style={{ textDecoration: "none" }}
            >
              View My Books
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className="text-secondary"
              to="/search"
              style={{ textDecoration: "none" }}
            >
              Search For More Books
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
