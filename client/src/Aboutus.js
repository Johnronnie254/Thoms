                                                                                                                    import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer'; 
import ITConsultingImage from './Assets/IT_consulting.jpg';
import VisionMissionImage from './Assets/vision-mission.jpg';


function Aboutus() {
  return (
    <div style={{ backgroundColor: '#002b45', color: '#ffffff', padding: '40px 0 0 0' }}>
      <Container style={{ marginBottom: "200px" }}>
        {/* Company Overview Section */}
        <Row className="align-items-center" style={{ marginTop: "50px" }}>
          <Col md={6}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '20px' }}>
              About Us
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Richways Business Solutions Limited is a leading consultancy firm dedicated to providing comprehensive business solutions across a range of industries. With a focus on delivering excellence and driving growth, we offer a suite of services designed to meet the complex needs of businesses in today’s competitive landscape. Our team of seasoned professionals brings a wealth of experience across various sectors, ensuring tailored solutions that enhance business performance and sustainability.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={ITConsultingImage}
              alt='Company Overview'
              style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
          </Col>
        </Row>

        {/* Our Mission Section */}
        <Row className="align-items-center" style={{ marginTop: '240px' }}>
          <Col md={6} order={{ md: 2 }}>
            <img
              src={VisionMissionImage}
              alt='Mission'
              style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
          </Col>
          <Col md={6} order={{ md: 1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              <h1> Our Commitment </h1>

              <p style={{ marginBottom: "1.5rem", maxWidth: "540px" }}>At Richways Business Solutions Limited, we are committed to delivering value to our clients through innovative solutions and unparalleled expertise. We strive to build long-term relationships with our clients by consistently exceeding their expectations and driving business success.
              </p>

              <h1>Our Mission</h1>
              <p style={{ marginBottom: "1.5rem", maxWidth: "540px" }}>“To empower businesses by providing innovative solutions and strategic insights that drive sustainable growth and success.”</p>

              <h1>Our Vision</h1>
              <p style={{ marginBottom: "1.5rem", maxWidth: "540px" }}>“To be the most trusted partner for businesses seeking excellence and transformation in a rapidly evolving global market.”</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Aboutus;
