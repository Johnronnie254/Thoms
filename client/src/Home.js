import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Footer from './Footer';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Services from './Services';

// Main Home component
function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Functions to scroll to specific sections
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero and Services Carousel */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={false}
        style={styles.carousel}
      >
        {/* Hero Section */}
        <div style={{ ...styles.heroSection, backgroundImage: `url('https://images.unsplash.com/photo-1581094651181-35942459ef62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
          <div style={styles.overlay}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Empowering Businesses with IT Solutions</h1>
            <p style={styles.heroSubtitle}>
              We provide innovative and reliable solutions tailored to meet your business needs.
            </p>
            <button style={styles.ctaButton}>Get Started</button>
          </div>
        </div>

        {/* Carousel Items */}
        {carouselItems.map((item, index) => (
          <div key={index} style={styles.carouselItem}>
            <img src={item.imgSrc} alt={item.altText} style={styles.carouselImage} />
            <div style={styles.carouselText}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* About Us Section */}
      <div ref={aboutRef} id="aboutus" style={styles.section}>
        <Aboutus />
      </div>

      {/* Services Section */}
      <div ref={servicesRef} id="services" style={styles.section}>
        <Services />
      </div>

      {/* Contact Us Section */}
      <div ref={contactRef} id="contactus" style={styles.section}>
        <Contactus />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '100%',
    color: '#333',
  },
  heroSection: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '640px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '25px',
  },
  heroSubtitle: {
    fontSize: '20px',
    marginBottom: '35px',
  },
  ctaButton: {
    backgroundColor: '#d12929',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '15px 25px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  carousel: {
    height: '500px', // Ensures uniform height
  },
  carouselItem: {
    position: 'relative',
    textAlign: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '500px', // Ensures uniform height
    objectFit: 'cover',
  },
  carouselText: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px 20px',
    borderRadius: '8px',
  },
  section: {
    padding: '100px 0',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
};

const carouselItems = [
  {
    imgSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Team collaborating on IT consulting solutions",
    title: "IT Consulting",
    description: "Tailored Solutions for Your Business",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1668854096784-3ce7679fa841?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Engineers maintaining seamless DevOps operations",
    title: "DevOps & Support",
    description: "Ensuring Seamless Operations",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1511377107391-116a9d5d20b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Financial experts handling accounting tasks",
    title: "Accounting",
    description: "Comprehensive Financial Management",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1510070009289-b5bc34383727?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Creative team brainstorming design and planning strategies",
    title: "Design and Planning",
    description: "Creative Solutions for Your Projects",
  },
];

export default Home;
