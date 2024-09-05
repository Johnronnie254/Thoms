import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; // Import Nav component
import './index.css'

export default function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#002b45', padding: '10px 20px' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/home" style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
          RBS
        </Navbar.Brand>
        {/* Collapse button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Navbar items */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='nav'>
            {/* <Nav.Link as={Link} to="/home" style={{ color: 'white', fontSize: '18px', marginRight: '1rem' }}>Home</Nav.Link> */}
            <Nav.Link as={Link} to="/aboutus" style={{ color: 'white', fontSize: '18px', marginRight: '1.5rem' }}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" style={{ color: 'white', fontSize: '18px', marginRight: '1.5rem' }}>Services</Nav.Link>
            <Nav.Link as={Link} to="/contactus" style={{ color: 'white', fontSize: '18px' }}><div className='nav-contact'>Contact us</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
