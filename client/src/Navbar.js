import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" style={{ padding: '10px 20px' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
          RBS
        </Navbar.Brand>
        {/* Collapse button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Navbar items */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" style={{ color: 'white', fontSize: '18px' }}>Home</Nav.Link>
            <Nav.Link href="#aboutus" style={{ color: 'white', fontSize: '18px' }}>About Us</Nav.Link>
            <Nav.Link href="#contactus" style={{ color: 'white', fontSize: '18px' }}>Contact Us</Nav.Link>
            <Nav.Link href="#services" style={{ color: 'white', fontSize: '18px' }}>Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
