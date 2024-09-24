import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null); // New state to handle form status

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        fetch('https://api.richwaysbusiness.com/contacts', {  // Updated backend API URL
=======
        fetch('https://richwaysbusiness.com/backend/contacts', {  // Updated URL to match the production endpoint
>>>>>>> 331cb20fa467a478ef495c3d5ea69c6063d59286
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                setFormStatus('success');
                console.log('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setFormStatus('failure');
                console.log('Form submission failed.');
            }
        })
        .catch(error => {
            setFormStatus('error');
            console.error('Error:', error);
        });
    };

    return (
        <div className="contact-us-container">
            <h2 className="contact-us-title">Contact Us</h2>
            <div className="contact-us-content">
                {/* Contact Form */}
                <div className="contact-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Enter your full name"
                                onChange={handleChange}
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
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="submit-button"
                        >
                            Submit
                        </Button>
                    </Form>

                    {/* Form Status */}
                    {formStatus === 'success' && <p className="success-message">Your message has been sent successfully!</p>}
                    {formStatus === 'failure' && <p className="error-message">Failed to submit the form. Please try again.</p>}
                    {formStatus === 'error' && <p className="error-message">There was an error with the server. Please try again later.</p>}
                </div>

                {/* Contact Details */}
                <div className="contact-details">
                    <h4>Get in Touch</h4>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> IPS Building, Mama Ngina Street
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> P.O. Box 9358-00100, Nairobi
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} />
<<<<<<< HEAD
                        <a href="tel:+254722440800" className="contact-link">Tel: +254722440800</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:solutions@richwaysbusiness.com" className="contact-link">Email: solutions@richwaysbusiness.com</a>
=======
                        <a 
                          href="tel:+254722440800" 
                          style={{ color: '#b0bec5', textDecoration: 'none' }} // Subtle color and no underline
                        >
                          Tel: +254722440800
                        </a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a 
                          href="mailto:solutions@richwaysbusiness.com" 
                          style={{ color: '#b0bec5', textDecoration: 'none' }} // Subtle color and no underline
                        >
                          Email: solutions@richwaysbusiness.com
                        </a>
>>>>>>> 331cb20fa467a478ef495c3d5ea69c6063d59286
                    </p>
                    <div className="social-media-links">
                        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
