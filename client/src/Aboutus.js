import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Aboutus() {
  return (
    <div style={{ backgroundColor: '#002b45', color: '#ffffff', padding: '40px 0' }}>
      <Container>
        {/* Company Overview Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '20px' }}>
              About Us
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              Richways Business Solutions Limited is a leading consultancy firm dedicated to providing comprehensive business solutions across a range of industries. With a focus on delivering excellence and driving growth, we offer a suite of services designed to meet the complex needs of businesses in today’s competitive landscape. Our team of seasoned professionals brings a wealth of experience across various sectors, ensuring tailored solutions that enhance business performance and sustainability.
            </p>
          </Col>
          <Col md={6}>
            <img 
              src='https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Company Overview' 
              style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} 
            />
          </Col>
        </Row>

        {/* Our Mission Section */}
        <Row className="align-items-center" style={{ marginTop: '40px' }}>
          <Col md={6} order={{ md: 2 }}>
            <img 
              src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Mission' 
              style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} 
            />
          </Col>
          <Col md={6} order={{ md: 1 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '20px' }}>
              
            </h2>
            <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            <h1> Our Commitment </h1>

                At Richways Business Solutions Limited, we are committed to delivering value to our clients through innovative solutions and unparalleled expertise. We strive to build long-term relationships with our clients by consistently exceeding their expectations and driving business success.


            <h1>Our Mission</h1>
                “To empower businesses by providing innovative solutions and strategic insights that drive sustainable growth and success.”

            <h1>Our Vision</h1>
                  “To be the most trusted partner for businesses seeking excellence and transformation in a rapidly evolving global market.”
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutus;
