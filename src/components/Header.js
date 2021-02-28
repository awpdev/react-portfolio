import { BrowserRouter as Link } from 'react-router-dom';
import Container from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const style = {
  "background-color": "#00008d",
  "color": "white",
  "padding": "12px"
}

function Header() {

  return (
    <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom" style={style}>
        <Navbar.Brand>Andrew Park</Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link classname="nav-link" to="/">Home</Link>
            <Link classname="nav-link" to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;