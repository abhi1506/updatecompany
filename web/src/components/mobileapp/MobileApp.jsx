
import React, { useState } from "react";
import "./Mobileapp.css";
import QuotationForm from '../form/QuotationForm';
// Import images
// import heroBackground from "../../assets/mobile-app-development.jpg";
import expertiseImage from "../../assets/img-2.jpg";
import servicesImage from "../../assets/img-3.png";

const MobileAppDevelopmentPage = () => {
    const [consultactive, setConsultActive] = useState(false);

    const handleConsult = () =>{
      setConsultActive(true);
    }

  return (
    <div className="mobile-app-page">
      {/* Hero Section */}
      <section className="hero_mobile">
        <div className="hero-overlay">
          <h1>Mobile App Development</h1>
          <p>
            Convert your ideas into a live application with Thinkweb Hub app
            development services
          </p>
        </div>
      </section>

      <section className="section expertise">
        <div className="section-grid">
          <div className="section-text">
            <h2>Our Cutting-Edge Expertise</h2>
            <p>
              In today's digital landscape, we empower businesses with
              innovative technologies that drive intelligent, data-driven
              insights and seamless interconnectivity. Our strategic approach
              transforms your digital strategy, delivering unparalleled business
              value across every touchpoint.
            </p>
            <ul className="expertise-highlights">
              <li>🚀 Innovative Solutions</li>
              <li>📊 Data-Driven Strategies</li>
              <li>🔗 Seamless Integration</li>
            </ul>
          </div>
          <div className="section-image">
            <img
              src={expertiseImage}
              alt="Innovative Mobile Solutions"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="section-grid reverse">
          <div className="section-text">
            <h2>Transforming Dreams into Digital Reality</h2>
            <p>
              We provide comprehensive mobile app development services that
              transcend traditional coding. Our holistic approach ensures your
              app not only functions flawlessly but stands out in the
              competitive digital marketplace.
            </p>
            <div className="services-list">
              <div className="service-item">
                <span className="icon">🛠️</span>
                <h4>Custom Development</h4>
                <p>
                  Tailored solutions precisely matching your unique business
                  needs
                </p>
              </div>
              <div className="service-item">
                <span className="icon">🔄</span>
                <h4>Ongoing Support</h4>
                <p>
                  Continuous maintenance and performance optimization strategies
                </p>
              </div>
              <div className="service-item">
                <span className="icon">📣</span>
                <h4>Marketing Boost</h4>
                <p>
                  Strategic services to amplify app visibility and accelerate
                  growth
                </p>
              </div>
            </div>
          </div>
          <div className="section-image">
            <img
              src={servicesImage}
              alt="Comprehensive App Services"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* Consultation Section */}
      <section className="consultationa-section">
        <div className="consultation-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn" onClick={handleConsult}>Consult Now →</button>
        </div>
      </section>
      <section>
      {
          consultactive &&  (
            <div><QuotationForm /></div> 
          )
        }
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;
