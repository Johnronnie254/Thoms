// Importing necessary components
import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Ensure Carousel is imported
import Footer from './Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Main Home component
function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Richways Business Solutions Limited</h1>
          <p style={styles.heroSubtitle}>Empowering Your Business Through Digital Transformation</p>
          <button style={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.cardSection}>
        <h2 style={styles.sectionTitle}>Our Featured Services</h2>
        <div style={styles.cardContainer}>
          {/* Cards for services */}
          <div style={styles.card}>
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="IT Consulting" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardTitle}>IT Consulting</p>
              <p style={styles.cardText}>Tailored Solutions for Your Business</p>
            </div>
          </div>
          <div style={styles.card}>
            <img src="https://images.unsplash.com/photo-1668854096784-3ce7679fa841?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="DevOps" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardTitle}>DevOps & Support</p>
              <p style={styles.cardText}>Ensuring Seamless Operations</p>
            </div>
          </div>
          <div style={styles.card}>
            <img src="https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accounting" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardTitle}>Accounting</p>
              <p style={styles.cardText}>Comprehensive Financial Management</p>
            </div>
          </div>
          <div style={styles.card}>
            <img src="https://images.unsplash.com/photo-1510070009289-b5bc34383727?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Design and Planning" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardTitle}>Design and Planning</p>
              <p style={styles.cardText}>Creative Solutions for Your Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={styles.partnersSection}>
        <h2 style={styles.sectionTitle}>Our Partners</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {partners.map((partner, index) => (
            <div key={index} style={styles.partnerCard}>
              <img src={partner.logo} alt={partner.name} style={styles.partnerLogo} />
              <div style={styles.partnerBody}>
                <h3 style={styles.partnerTitle}>{partner.name}</h3>
                <p style={styles.partnerText}>{partner.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
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
      </section>

      {/* Call to Action Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Transform Your Business?</h2>
        <button style={styles.ctaButton}>Contact Us Today</button>
      </section>

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
    maxWidth: '1200px',
    padding: '20px',
    color: '#333'
  },
  heroSection: {
    background: 'url(https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center center/cover',
    color: 'black',
    textAlign: 'center',
    padding: '100px 20px',
    borderRadius: '8px',
    marginBottom: '20px',
    height: '100vh', // Ensures hero section takes full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  heroContent: {
    position: 'relative',
    zIndex: 1
  },
  heroTitle: {
    fontSize: '48px',
    margin: '0',
    fontWeight: 'bold',
    color: '#002b45'
  },
  heroSubtitle: {
    fontSize: '24px',
    margin: '10px 0 20px',
    color: '#002b45'
  },
  ctaButton: {
    backgroundColor: '#0044cc', // Blue theme
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  cardSection: {
    margin: '20px 0',
  },
  sectionTitle: {
    fontSize: '28px',
    margin: '0 0 20px',
    textAlign: 'center',
    color: '#0044cc' // Blue theme
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
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
  },
  cardText: {
    fontSize: '14px',
    color: '#666',
  },
  partnersSection: {
    margin: '40px 0',
    padding: '20px 0',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
  },
  partnerCard: {
    textAlign: 'center',
    padding: '20px',
  },
  partnerLogo: {
    width: '150px',
    height: 'auto',
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
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  }
};

export default Home;
