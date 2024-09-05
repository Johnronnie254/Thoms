// Importing necessary components
import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Ensure Carousel is imported
import Footer from './Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { ashton, biz } from './Assets/exports';

// Main Home component
function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div className='hero-container-main' style={{ background: '#002b45' }}>
        <section style={styles.heroSection} className='hero-sect'>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Your reliable IT solutions provider</h1>
            <p style={styles.heroSubtitle}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <button style={styles.ctaButton} className='cta-button'>Get Started</button>
          </div>
          <div className='hero-image-container'>
            <img src={biz} alt="hero-image" className='hero-image' />
          </div>
        </section>
      </div>


      {/* Services Section */}
      <section style={styles.cardSection}>
        <h2 style={styles.sectionTitle}>Our Featured Services</h2>
        <div style={styles.cardContainer}>
          {/* Cards for services */}
          <div style={styles.card} className='card'>
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="IT Consulting" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardTitle}>IT Consulting</p>
              <p style={styles.cardText}>Tailored Solutions for Your Business</p>
            </div>
          </div>
          <div style={styles.card} className='card'>
            <img src="https://images.unsplash.com/photo-1668854096784-3ce7679fa841?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="DevOps" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardTitle}>DevOps & Support</p>
              <p style={styles.cardText}>Ensuring Seamless Operations</p>
            </div>
          </div>
          <div style={styles.card} className='card'>
            <img src="https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accounting" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardTitle}>Accounting</p>
              <p style={styles.cardText}>Comprehensive Financial Management</p>
            </div>
          </div>
          <div style={styles.card} className='card'>
            <img src="https://images.unsplash.com/photo-1510070009289-b5bc34383727?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Design and Planning" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardTitle}>Design and Planning</p>
              <p style={styles.cardText}>Creative Solutions for Your Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div style={{ background: 'white' }}>
        <section style={styles.partnersSection}>
          <h2 style={styles.sectionTitle}>Our Partners</h2>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {partners.map((partner, index) => (
              <div key={index} style={styles.partnerCard}>
                <div className='partner-card'>
                  <img src={ashton} alt={partner.name} style={styles.partnerLogo} />
                  <div style={styles.partnerBody}>
                    <h3 style={styles.partnerTitle}>{partner.name}</h3>
                    <p style={styles.partnerText}>{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        {/* Testimonials Section */}
        {/* <section style={styles.testimonialsSection}>
          <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div style={styles.testimonialItem}>
              <p style={styles.testimonialText}>
                "Richways provided exceptional IT consulting that transformed our business operations. Highly recommend!"
              </p>
              <p style={styles.testimonialAuthor}>- Jane Doe, CEO of Tech Solutions</p>
            </div>
            <div style={styles.testimonialItem}>
              <p style={styles.testimonialText}>
                "Their DevOps support was critical in streamlining our processes and improving efficiency."
              </p>
              <p style={styles.testimonialAuthor}>- John Smith, CTO of Innovate Corp</p>
            </div>
          </Carousel>
        </section> */}
        <section className='cta-1'>
          <div className='cta-1-child'>
            <h2>The IT industry is a challenge.</h2>
            <h2>Let us handle your IT needs while you handle making money.</h2>
            <p>We leverage the latest technologies to enhance speed and delivery. With us your time is always our priority.</p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section style={styles.ctaSection} className='cta-section'>
          <div className='cta-section-0'>
          <div className='cta-div1'>
          <h2 style={styles.ctaTitle}>Ready to Transform Your Business?</h2>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button style={styles.ctaButtons} className='cta-Buttons'>Contact Us Today</button>
          </div>

          <div className='cta-div2'>
          <img src={biz} alt="hero-image" className='hero-image' />
          </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Partners data
const partners = [
  {
    name: 'Mezzanine Ware Pty',
    description: 'A leading technology company specializing in innovative solutions for the telecom, healthcare, and logistics industries.',
    logo: 'https://via.placeholder.com/150?text=Mezzanine+Ware+Pty' // Placeholder image
  },
  {
    name: 'Yara Group',
    description: 'A global leader in agricultural solutions, focusing on sustainable farming practices and fertilizer production.',
    logo: 'https://via.placeholder.com/150?text=Yara+Group' // Placeholder image
  },
  {
    name: 'Hiview International Limited',
    description: 'A consultancy firm renowned for its expertise in international trade, logistics, and supply chain management.',
    logo: 'https://via.placeholder.com/150?text=Hiview+International+Limited' // Placeholder image
  }
];

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '100%',
    color: '#333',
  },
  heroSection: {
    // background: 'url(https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center center/cover',
    color: 'white',
    textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
    background: '#002b45',
    // border: '2px solid red',
    margin: '0 auto 20px auto',
    // border: '2px solid blue'
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '640px',
  },
  heroTitle: {
    fontSize: '48px',
    marginBottom: '25px',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'start'
  },
  heroSubtitle: {
    fontSize: '20px',
    margin: '10px 0 35px 0',
    color: '#fff',
    textAlign: 'start'
  },
  ctaButton: {
    backgroundColor: '#0044cc', // Blue theme
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '15px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '140px'
  },
  cardSection: {
    margin: '20px 0 120px 0',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '80px 0 50px',
    textAlign: 'center',
    color: '#002b45' // Blue theme
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  },
  card: {
    width: '250px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '15px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0 5px',
    color: '#002b45'
  },
  cardText: {
    fontSize: '14px',
    color: '#666',
  },
  partnersSection: {
    margin: '40px 0',
    padding: '20px 0',
    backgroundColor: '#f1f1f1',
    // borderBottom: '1px solid rgb(212, 212, 212)'
  },
  partnerCard: {
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0'
  },
  partnerLogo: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  partnerBody: {
    padding: '10px',
  },
  partnerTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 0 5px',
  },
  partnerText: {
    fontSize: '14px',
    color: '#666',
    maxWidth: '350px'
  },
  testimonialsSection: {
    margin: '40px 0',
    padding: '20px 0',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
  },
  testimonialItem: {
    padding: '20px',
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: '16px',
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  testimonialAuthor: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#0044cc',
  },
  ctaSection: {
    margin: '40px 0',
    padding: '20px 0',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  ctaButtons: {
    backgroundColor: '#0044cc', // Blue theme
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '15px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '200px',
    marginTop: '25px'
  }
};

export default Home;
