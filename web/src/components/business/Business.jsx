import React from "react";
import "./Business.css";
import businessImage from "../../assets/heroo.jpg";
import BusinessBenefits from "./BusinessBenefits";

const BusinessLanding = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Our custom software development services focus on creating applications uniquely designed for your business needs.",
      icon: "💻",
    },
    {
      title: "Data Analysis",
      description:
        "Gain a competitive edge with data-driven insights. Our Data Analytics services enable businesses to optimize processes.",
      icon: "📊",
    },
    {
      title: "E-Commerce Solution",
      description:
        "Complete e-commerce solutions with integrated payment systems and inventory management.",
      icon: "🛍️",
    },
  ];

  const orgTypes = [
    "Startups",
    "Partners",
    "Small business",
    "Large corporation",
  ];

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero_bb">
        <div className="hero-content_bb">
          <h1>Business Solution</h1>
          <p>
            Start Designs is an emerging web development company that offers
            website development services. Our in-house team and professional web
            developers use new technologies
          </p>
          {/* <div className="imagess"></div> */}
          <button className="cta-button_bb">Read More</button>
        </div>
        <div className="hero-image_bb">
          <img
            src={businessImage}
            alt="Business professional"
            className="professional-b-image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services_bussi">
        <h2>Meet Technology That Transform The World</h2>
        <div className="services-bussi-grid">
          {services.map((service, index) => (
            <div key={index} className="service-bussi-card">
              <div className="service-bussi-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cloud Section */}
      <section className="cloud-bussi">
        <div className="cloud-content-bussi">
          <h2>Unlock The Cloud Transformation</h2>
          <p>
            We bring the cloud experience to all your IT and Business solutions.
            Our combination of public and private cloud infrastructure.
          </p>

          <div className="org-types">
            {orgTypes.map((type, index) => (
              <button key={index} className="org-button">
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>
      <BusinessBenefits />
    </div>
  );
};

export default BusinessLanding;
