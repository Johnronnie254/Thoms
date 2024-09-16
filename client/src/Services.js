import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faUsers, faTachometerAlt, faLaptopCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import "./Service.css";

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const handleCardClick = (index) => {
        setSelectedService(selectedService === index ? null : index); // Toggle card content on click
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '60px 0', color: 'black' }}>
            <Container style={{ paddingBottom: "120px" }}>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial', textAlign: 'center', marginBottom: '40px' }}>
                    Our Services
                </h2>
                <Row>
                    {services.map((service, index) => (
                        <Col md={6} lg={4} className="mb-4" key={index}>
                            <div
                                className="service-card"
                                style={{
                                    cursor: "pointer",
                                    backgroundColor: selectedService === index ? '#f39c12' : '#fff',
                                    color: selectedService === index ? '#000' : '#000',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    transition: 'background-color 0.3s',
                                }}
                                onClick={() => handleCardClick(index)}
                            >
                                <FontAwesomeIcon icon={service.icon} size="3x" style={{ marginBottom: '15px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>{service.title}</h3>
                                <p style={{ fontSize: '16px' }}>{service.description}</p>
                            </div>
                            {selectedService === index && (
                                <div className="service-details" style={{
                                    backgroundColor: '#fff',
                                    padding: '20px',
                                    marginTop: '10px',
                                    borderRadius: '10px',
                                    color: '#000',
                                    textAlign: 'center'
                                }}>
                                    <h4>Contact Us for More Information:</h4>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                        <Button variant="outline-primary" style={{ padding: '10px 20px' }}>
                                            <a
                                                href={`mailto:solutions@richwaysbusiness.com?subject=Inquiry about ${service.title}`}
                                                style={{ textDecoration: 'none', color: '#000' }}
                                            >
                                                Email Us
                                            </a>
                                        </Button>
                                        <Button variant="outline-success" style={{ padding: '10px 20px' }}>
                                            <a href="tel:+254722440800" style={{ textDecoration: 'none', color: '#000' }}>
                                                Call Us
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

const services = [
    {
        title: 'Financial Advisory',
        description: 'We provide expert financial advice to help businesses navigate the complexities of financial management. Our services include investment planning, risk management, tax advisory, and financial restructuring to ensure our clients achieve their financial goals.',
        icon: faDollarSign
    },
    {
        title: 'Research and Market Analysis',
        description: 'Our research division conducts in-depth market analysis, providing actionable insights that empower businesses to make informed decisions. We cover market trends, competitive analysis, consumer behavior studies, and feasibility assessments.',
        icon: faChartLine
    },
    {
        title: 'Human Resource Solutions',
        description: 'We offer comprehensive HR services, including talent acquisition, employee training and development, performance management, and HR policy formulation. Our goal is to help businesses build strong, motivated, and efficient teams.',
        icon: faUsers
    },
    {
        title: 'Strategic Planning',
        description: 'Richways Business Solutions excels in developing strategic plans that drive business growth and sustainability. Our services include business model innovation, market entry strategies, and corporate restructuring.',
        icon: faTachometerAlt
    },
    {
        title: 'Information Technology (IT) Solutions',
        description: 'We provide cutting-edge IT solutions that help businesses optimize their operations. Our services include IT infrastructure setup, software development, cybersecurity, and IT consulting.',
        icon: faLaptopCode
    },
    {
        title: 'Data Analytics',
        description: 'Our data analytics services enable businesses to leverage big data for decision-making. We specialize in data mining, predictive analytics, business intelligence, and reporting to help businesses unlock insights from their data.',
        icon: faDatabase
    }
];
