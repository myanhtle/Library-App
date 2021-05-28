import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-warning">
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
          <div
            className="navbar-text"
            style={{
              fontFamily: "Monospace",
              fontSize: "x-large",
              color: "black",
              position: "absolute",
              width: "100%",
              left: "0",
              textAlign: "center",
              paddingBottom: "2%",
            }}
          >
            My Open Library
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
