import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                {/* Contact Form */}
                <div style={{ flex: 1 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Label style={{ fontSize: '18px' }}>Full Name</Form.Label>
                            <hr style={{ border: 'none', borderBottom: '1px solid black', margin: '0', marginBottom: '10px' }} />
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                style={{ border: 'none', borderBottom: '1px solid black', borderRadius: '0', padding: '10px 0', outline: 'none' }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formEmail">
                            <Form.Label style={{ fontSize: '18px' }}>Email Address</Form.Label>
                            <hr style={{ border: 'none', borderBottom: '1px solid black', margin: '0', marginBottom: '10px' }} />
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="name@example.com"
                                onChange={handleChange}
                                style={{ border: 'none', borderBottom: '1px solid black', borderRadius: '0', padding: '10px 0', outline: 'none' }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formMessage">
                            <Form.Label style={{ fontSize: '18px' }}>Message</Form.Label>
                            <hr style={{ border: 'none', borderBottom: '1px solid black', margin: '0', marginBottom: '10px' }} />
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={formData.message}
                                rows={5}
                                placeholder="Your message here..."
                                onChange={handleChange}
                                style={{ border: 'none', borderBottom: '1px solid black', borderRadius: '0', padding: '10px 0', outline: 'none' }}
                            />
                        </Form.Group>
                        <Button
                            variant="light"
                            type="submit"
                            style={{ width: '100%', padding: '10px', fontWeight: 'bold', backgroundColor: '#f39c12', borderColor: '#f39c12', marginTop: '20px' }}
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
                
                {/* Contact Details */}
                <div style={{ flex: 1, padding: '0 20px', borderLeft: '2px solid #f39c12' }}>
                    <h4 style={{ fontSize: '20px', marginBottom: '20px' }}>Get in Touch</h4>
                    <p style={{ marginBottom: '10px' }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> IPS Building, Mama Ngina Street
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> P.O. Box 9358-00100, Nairobi
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="tel:+254722440800" style={{ color: 'black', textDecoration: 'none' }}>
                            Tel: +254722440800
                        </a>
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:solutions@richwaysbusiness.com" style={{ color: 'black', textDecoration: 'none' }}>
                            Email: solutions@richwaysbusiness.com
                        </a>
                    </p>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <a href="https://facebook.com" style={{ color: '#000000' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="https://instagram.com" style={{ color: '#000000' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        <a href="https://x.com" style={{ color: '#000000' }}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
