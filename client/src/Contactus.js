import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ContactImage from './Assets/contact.jpeg';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                console.log('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                console.log('Form submission failed.');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '60px 20px', color: 'black' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial', textAlign: 'center', marginBottom: '40px' }}>
                Contact Us
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '80%', margin: '0 auto' }}>
                <div style={{ flex: '1', marginRight: '40px' }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                style={{ padding: '10px' }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="name@example.com"
                                onChange={handleChange}
                                style={{ padding: '10px' }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={formData.message}
                                rows={5}
                                placeholder="Your message here..."
                                onChange={handleChange}
                                style={{ padding: '10px' }}
                            />
                        </Form.Group>
                        <Button
                            variant="light"
                            type="submit"
                            style={{ width: '100%', padding: '10px', fontWeight: 'bold', backgroundColor: '#f39c12', borderColor: '#f39c12' }}
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
                <div style={{ flex: '1', marginLeft: '40px' }}>
                    <img
                        src={ContactImage}
                        alt='Contact us'
                        style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                    />
                </div>
            </div>
            {/* Footer with contact info and social media links */}
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '20px', marginBottom: '20px' }}>Get in Touch</h4>
                <p style={{ marginBottom: '10px' }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> IPS Building, Mama Ngina Street
                </p>
                <p style={{ marginBottom: '10px' }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> P.O. Box 9358-00100, Nairobi
                </p>
                {/* Clickable phone number */}
                <p style={{ marginBottom: '10px' }}>
                    <FontAwesomeIcon icon={faPhone} /> 
                    <a href="tel:+254722440800" style={{ color: 'black', textDecoration: 'none' }}>
                        Tel: +254722440800
                    </a>
                </p>
                {/* Clickable email address */}
                <p style={{ marginBottom: '10px' }}>
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    <a href="mailto:solutions@richwaysbusiness.com" style={{ color: 'black', textDecoration: 'none' }}>
                        Email: solutions@richwaysbusiness.com
                    </a>
                </p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="https://facebook.com" style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://instagram.com" style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://x.com" style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            </div>
        </div>
    );
}
