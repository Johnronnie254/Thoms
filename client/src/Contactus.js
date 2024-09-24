import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function ContactUs() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
        reply_to: '', // Assuming you want to capture a reply-to email
    });
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_jx5ef0q', '5iq7h8o', { // Your service ID and template ID
            from_name: formData.from_name,
            from_email: formData.from_email,
            message: formData.message,
            reply_to: formData.reply_to,
        }, 'wBhqa3IgU_Fj_pXHJ') // Your public API key
        .then((response) => {
            console.log('Email sent successfully:', response.status, response.text);
            setFormStatus('success');
            setFormData({
                from_name: '',
                from_email: '',
                message: '',
                reply_to: ''
            });
        }, (error) => {
            console.log('Failed to send email:', error);
            setFormStatus('failure');
        });
    };

    return (
        <div className="contact-us-container">
            <h2 className="contact-us-title">Contact Us</h2>
            <div className="contact-us-content">
                <div className="contact-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="from_email"
                                value={formData.from_email}
                                placeholder="name@example.com"
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formReplyTo">
                            <Form.Label>Reply To (optional)</Form.Label>
                            <Form.Control
                                type="email"
                                name="reply_to"
                                value={formData.reply_to}
                                placeholder="replyto@example.com"
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
                                required
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
                        <a href="tel:+254722440800" className="contact-link">Tel: +254722440800</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:solutions@richwaysbusiness.com" className="contact-link">Email: solutions@richwaysbusiness.com</a>
                    </p>
                    
                    <div className="social-media-links">
                        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
