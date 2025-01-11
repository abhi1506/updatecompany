import React from "react";
import "./Mobileapp.css";

// Import images
import heroBackground from "../../assets/mobile-app-development.jpg";
import expertiseImage from "../../assets/img-2.jpg";
import servicesImage from "../../assets/img-3.png";
import { Link } from "react-router-dom";

const MobileAppDevelopment = () => {
  return (
    <div className="mobile-app-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero-content_mobile">
          <h1>Mobile App Solutions</h1>
          <p>
            Convert your ideas into a live application with Thinkweb Hub app
            development services
          </p>
          <div className="hero-cta">
            <Link
              to={"/services/mobile-app-development"}
              className="primary-btn"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section expertise">
        <div className="section-grid">
          <div className="section-text">
            <h2>Our Expertise</h2>
            <p>
              Today’s digital era businesses are embracing technologies and
              innovations that make their organizations more intelligent,
              data-driven and interconnected. We empower our clients with new
              levels of innovation and business value across the entire digital
              value chain.
            </p>
          </div>
          <div className="section-image">
            <div className="image-wrapper">
              <img
                src={expertiseImage}
                alt="Innovative Mobile Solutions"
                className="expertise-image"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-services">
        <div className="services-section-grid reverse">
          <div className="services-section-text">
            <h2>Stunning development of dreams into reality</h2>
            <p>
              Our service doesn’t stop there. We offer ongoing support and
              maintenance services for the app development process to ensure t
              hat your app is running smoothly and
            </p>
            <p>
              Efficiently. We also offer marketing services to help promote your
              app and increase visibility in the app store.
            </p>
          </div>
          <div className="services-section-image">
            <img
              src={servicesImage}
              alt="Comprehensive App Services"
              className="services-image"
            />
          </div>
        </div>
      </section>

      <section className="consultationa-section">
        <div className="consultation-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn">Consult Now →</button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
