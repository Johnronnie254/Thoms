import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import './index.css';

export default function NavBar() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top" // Fixed position to ensure it stays at the top
      style={{ 
        backgroundColor: '#002b45', 
        padding: '10px 20px',
        zIndex: 10 // Ensure it's above other elements
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
          Richways Business Solutions
        </Navbar.Brand>

        {/* Contact Info below the logo */}
        <div style={{ color: 'white', fontSize: '14px', marginTop: '-8px' }}>
          <div><a href="mailto:solutions@richwaysbusiness.com"> Email: solutions@richwaysbusiness.com</a></div>
          <div><a href="tel:+254722440800"> Tel: +254722440800</a></div>
        </div>

        {/* Collapse button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Navbar items */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='nav'>
            {/* Standard Links to different sections */}
            <Nav.Link href="#home" style={navStyle}>Home</Nav.Link>
            <Nav.Link href="#aboutus" style={navStyle}>About Us</Nav.Link>
            <Nav.Link href="#services" style={navStyle}>Services</Nav.Link>
            <Nav.Link href="#contactus" style={navStyle}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const navStyle = {
  color: 'white',
  fontSize: '18px',
  marginRight: '1.5rem',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

// Ensure the Navbar styles are included in index.css
