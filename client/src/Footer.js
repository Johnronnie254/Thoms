import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <Container>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>About Us</h4>
            <p style={styles.footerText}>
              At Richways Business Solutions Limited, we specialize in providing comprehensive digital transformation solutions. From IT consulting to ERP development, we are committed to solving your business challenges and ensuring your growth.
            </p>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Find Us</h4>
            <p style={styles.footerText}>
              IPS Building,<br />
              Mama Ngina Street,<br />
              P.O. Box 9358-00100,<br />
              Nairobi, Kenya<br />
              Tel: 0722 440 800<br />
              Email: solutions@richwaysbusiness.com
            </p>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Lin</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#home" style={styles.footerLink}>Home</a></li>
              <li><a href="#services" style={styles.footerLink}>Our Services</a></li>
              <li><a href="#aboutus" style={styles.footerLink}>About Us</a></li>
              <li><a href="#contactus" style={styles.footerLink}>Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>
            &copy; {new Date().getFullYear()} Richways Business Solutions Limited. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

// Inline styles
const styles = {
  footer: {
    backgroundColor: '#231834',
    color: 'white',
    padding: '40px 0',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerSection: {
    flex: '1 1 300px',
    margin: '0 20px',
  },
  footerTitle: {
    fontSize: '20px',
    marginBottom: '20px',
    textDecoration: "underline",
    textDecorationColor: "rgb(209, 41, 41)",
    textDecorationSkip: '4px',
    textDecorationThickness: '3px',
    textUnderlineOffset: '4px'
  },
  footerText: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
  footerLinks: {
    listStyleType: 'none',
    padding: '0',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    fontSize: '16px',
  },
  footerLinkHover: {
    textDecoration: 'underline',
  },
  footerBottom: {
    borderTop: '1px solid #444',
    paddingTop: '10px',
    textAlign: 'center',
  },
  footerBottomText: {
    fontSize: '14px',
  },
};
