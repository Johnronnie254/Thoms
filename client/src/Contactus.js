import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contactus() {
    return (
        <div style={{ backgroundColor: '#002b45', padding: '60px 20px', color: '#ffffff' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial', textAlign: 'center', marginBottom: '40px' }}>
                Contact Us
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '80%', margin: '0 auto' }}>
                <div style={{ flex: '1', marginRight: '40px' }}>
                    <Form>
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" style={{ padding: '10px' }} />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" style={{ padding: '10px' }} />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Your message here..." style={{ padding: '10px' }} />
                        </Form.Group>
                        <Button variant="light" style={{ width: '100%', padding: '10px', fontWeight: 'bold', backgroundColor: '#f39c12', borderColor: '#f39c12' }}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <div style={{ flex: '1', marginLeft: '40px' }}>
                    <img src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Contact us' style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
                </div>
            </div>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
    <h4 style={{ fontSize: '20px', marginBottom: '20px' }}>Get in Touch</h4>
    <p style={{ marginBottom: '10px' }}><FontAwesomeIcon icon={faMapMarkerAlt} /> IPS Building, Mama Ngina Street</p>
    <p style={{ marginBottom: '10px' }}><FontAwesomeIcon icon={faMapMarkerAlt} /> P.O. Box 9358-00100, Nairobi</p>
    <p style={{ marginBottom: '10px' }}><FontAwesomeIcon icon={faPhone} /> Tel: 0722 440 800</p>
    <p style={{ marginBottom: '10px' }}><FontAwesomeIcon icon={faEnvelope} /> Email: financialservices186@gmail.com</p>
</div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="https://facebook.com" style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://instagram.com" style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://tiktok.com" style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faTiktok} size="2x" /></a>
            </div>
        </div>
    );
}
