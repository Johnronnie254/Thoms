import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Contactus() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px', color: 'black' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial', textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '70%' }}>
                <div style={{ flex: '1', marginRight: '20px' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Names</Form.Label>
                            <Form.Control type="text" placeholder="fullnames" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary">Submit</Button>{' '}
                    </Form>
                </div>
                <div style={{ flex: '1' }}>
                    <img src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Contact us' style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '18px', marginRight: '20px' }}><FontAwesomeIcon icon={faFacebook} /> Nasyjma Autos</h2>
                <h2 style={{ fontSize: '18px', marginRight: '20px' }}><FontAwesomeIcon icon={faInstagram} /> Nasyjma Autos</h2>
                <h2 style={{ fontSize: '18px' }}><FontAwesomeIcon icon={faTiktok} /> Nasyjma Autos</h2>
            </div>
        </div>
    );
}