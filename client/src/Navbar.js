import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; // Import Nav component

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" style={{ padding: '10px 20px' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
          Nasyjma Autos
        </Navbar.Brand>
        {/* Collapse button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Navbar items */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/home" style={{ color: 'white', fontSize: '18px' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" style={{ color: 'white', fontSize: '18px' }}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contactus" style={{ color: 'white', fontSize: '18px' }}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/services" style={{ color: 'white', fontSize: '18px' }}>Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
