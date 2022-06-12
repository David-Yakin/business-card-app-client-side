import { Navbar, Container, Nav } from "react-bootstrap";
import LeftNavigation from "./LeftNavigation";
import Logo from "./Logo";
import RightNavigation from "./RightNavigation";

const NavBar = ({ user }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-12 d-flex justify-content-between">
            <LeftNavigation user={user} />
            <RightNavigation user={user} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {};

export default NavBar;
