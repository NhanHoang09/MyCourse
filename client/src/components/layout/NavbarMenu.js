import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const NavbarMenu = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  return (
    <Navbar expand="lg" bg="info" variant="dark" className="shadow pt-1 pb-1">
      <Navbar.Brand className=" text-white mr-0">
        <img src={learnItLogo} alt="learnItLogo" width="32" height="32" />
      </Navbar.Brand>
      <span className="font-weight-bolder text-white ">MyCourse</span>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-white home"
            to="/dashboard"
            as={Link}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white about"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className="font-weight-bolder text-white" disabled>
            Hi {username}
          </Nav.Link>
          <Button
            variant="dark"
            className="font-weight-bolder text-white "
            onClick={logout}
          >
            <img src={logoutIcon} alt="logoutIcon" width="24" height="24" />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
