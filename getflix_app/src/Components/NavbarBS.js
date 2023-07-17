import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Button,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavbarBS.css";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Store/UserContext";
import SearchBar from "./SearchBar";
import axios from "axios";

export const NavbarBootstrap = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useNavigate();

  function LogOutHandler(event) {
    event.preventDefault();

    axios
      .post(
        "http://localhost/first_year_group_project_y8/getflix_app/src/php/logout.php",
        {
          session_id: user.sessionId,
        }
      )
      .then(console.log)
      .catch(console.error);

    delete localStorage["session_id"];
    delete localStorage["username"];

    setUser({
      username: null,
      sessionId: null,
    });

    history("/");
  }

  const routerLinkStyle = {
    fontSize: "1.2rem",
    color: "#ffffff",
    textDecoration: "none",
  };

  const routerLinkStyleDropdown = {
    fontSize: "1.2rem",
    color: "#000000",
    textDecoration: "none",
  };

  if (user.sessionId) {
    return (
      <>
        <Navbar className="navbar fixed-top" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="/">GETFLIX</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <SearchBar />
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link style={routerLinkStyle} to="/">
                    Home
                  </Link>
                </Nav.Link>
                <NavDropdown title={user.username} id="navbarScrollingDropdown">
                  <Nav.Link>
                    <Link
                      style={routerLinkStyleDropdown}
                      className="link-router"
                      to="/favourites"
                    >
                      Favourites
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={routerLinkStyleDropdown}
                      onClick={LogOutHandler}
                      to="/"
                    >
                      Log Out
                    </Link>
                  </Nav.Link>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar className="navbar fixed-top" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="/">GETFLIX</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <SearchBar />
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link style={routerLinkStyle} to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link style={routerLinkStyle} to="/register">
                    Sign Up
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link style={routerLinkStyle} to="/login">
                    Log In
                  </Link>
                </Nav.Link>
                <NavDropdown.Divider />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
};
