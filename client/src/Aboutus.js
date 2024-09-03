import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Aboutus() {
  return (
    <div>
      <div style={{ marginTop: '70px', color: 'black', padding: '20px', marginBottom: '20px' }}>
        <Container>
          <Row>
            <Col>
              <img src='https://media.istockphoto.com/id/1301958898/photo/car-parts-and-auto-spare-in-shopping-basket-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=obJrXRKOtqYjhsPXPdG4yQxQLtMGtx5p0iCWb8PWfM8=' alt='car spare parts' style={{ width: '100%', height: 'auto', maxWidth: '300px', maxHeight: '300px', marginBottom: '20px' }} />
            </Col>
            <Col>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', width: '90%' }}>About Us</h2>
              <p>Nasyjma Autos stands as a beacon of reliability and expertise in the automotive industry. With years of experience and a deep understanding of VW, Audi, and Benz models, we take pride in being a trusted partner for drivers worldwide. Whether you're a seasoned enthusiast or a first-time car owner, Nasyjma Autos is here to provide unparalleled service, expertise, and a vast inventory of spare parts to keep your vehicle running smoothly for years to come.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: '20px', color: 'black', padding: '20px', marginBottom: '20px' }}>
        <Container>
          <Row>
            <Col>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', width: '90%' }}>Our Mission</h2>
              <p>At Nasyjma Autos, our mission is clear: to redefine the standard for automotive spare parts. We strive to offer a curated selection of components that not only meet but exceed the expectations of our customers. From sourcing the finest materials to ensuring meticulous craftsmanship, our focus remains unwavering – to enhance the performance and longevity of every vehicle we serve.</p>
            </Col>
            <Col>
              <img src='https://media.istockphoto.com/id/496352632/photo/kindly-car-manager-with-customer.jpg?s=1024x1024&w=is&k=20&c=1GyLvxgiokrjo4o6CU1WMtsqXwuo7z_qrBLwK3QYRQ4=' alt='' style={{ width: '100%', height: 'auto', maxWidth: '300px', maxHeight: '300px', marginBottom: '20px' }} />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: '20px', color: 'black', padding: '20px', marginBottom: '20px' }}>
        <Container>
          <Row>
            <Col>
              <img src='https://media.istockphoto.com/id/1438321944/photo/close-up-laptop-keyboard-with-car-button-and-magnifying-glass.jpg?s=1024x1024&w=is&k=20&c=igOrJqvBJSrZZkG3qL8fSnljvikL4JjgQaILDPvF000=' alt='' style={{ width: '100%', height: 'auto', maxWidth: '300px', maxHeight: '300px', marginBottom: '20px' }} />
            </Col>
            <Col>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', width: '90%' }}>Our Story</h2>
              <p>Nasyjma Autos began with a shared passion for precision engineering and luxury vehicles. What started as a hobby among friends evolved into a dedicated pursuit to provide fellow enthusiasts with premium spare parts for VW, Audi, and Benz models. Our journey is fueled by a commitment to quality, expertise, and a genuine love for automotive excellence.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Aboutus;