import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRocket, FaEye, FaHandshake } from 'react-icons/fa';

function Aboutus() {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '60px 0' }}>
      <Container>
        {/* Company Overview Section */}
        <Row className="align-items-center" style={{ marginTop: '30px' }}>
          <Col md={6}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'black', marginBottom: '20px' }}>
              About Us
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Richways Business Solutions Limited is a leading consultancy firm dedicated to providing comprehensive business solutions across a range of industries. With a focus on delivering excellence and driving growth, we offer a suite of services designed to meet the complex needs of businesses in today’s competitive landscape. Our team of seasoned professionals brings a wealth of experience across various sectors, ensuring tailored solutions that enhance business performance and sustainability.
            </p>
          </Col>
          <Col md={6}>
            <img
              src='https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Company Overview'
              style={{ width: '80%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '0 auto', display: 'block' }}
            />
          </Col>
        </Row>

        {/* Our Mission, Vision, and Commitment Section */}
        <Row className="text-center" style={{ marginTop: '60px' }}>
          {/* Mission Card */}
          <Col md={4} style={{ marginBottom: '20px' }}>
            <div style={styles.card}>
              <FaRocket style={styles.icon} />
              <h3 style={styles.cardTitle}>Our Mission</h3>
              <p style={styles.cardText}>
                “To empower businesses by providing innovative solutions and strategic insights that drive sustainable growth and success.”
              </p>
            </div>
          </Col>

          {/* Vision Card */}
          <Col md={4} style={{ marginBottom: '20px' }}>
            <div style={styles.card}>
              <FaEye style={styles.icon} />
              <h3 style={styles.cardTitle}>Our Vision</h3>
              <p style={styles.cardText}>
                “To be the most trusted partner for businesses seeking excellence and transformation in a rapidly evolving global market.”
              </p>
            </div>
          </Col>

          {/* Commitment Card */}
          <Col md={4} style={{ marginBottom: '20px' }}>
            <div style={styles.card}>
              <FaHandshake style={styles.icon} />
              <h3 style={styles.cardTitle}>Our Commitment</h3>
              <p style={styles.cardText}>
                At Richways Business Solutions Limited, we are committed to delivering value to our clients through innovative solutions and unparalleled expertise. We strive to build long-term relationships with our clients by consistently exceeding their expectations and driving business success.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    height: '100%', // Ensures consistent card height
  },
  icon: {
    fontSize: '2.5rem',
    color: '#d12929',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '1rem',
    lineHeight: '1.6',
  },
};

export default Aboutus;
