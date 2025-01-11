import React from "react";
import "./BusinessBenefits.css";

const BusinessBenefits = () => {
  const benefits = [
    {
      title: "Cloud Solutions and Migrations",
      description:
        "Your journey to the cloud made simple: Leverage our expertise at Ambispine Technologies to migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, deployment, and management, ensuring a seamless transition and optimized performance.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity and Complian",
      description:
        "Secure your business, protect your future: At Ambispine Technologies, we defend your operations against evolving cyber threats. Our comprehensive security services ensure compliance with industry standards while safeguarding your sensitive data from breaches.",
      icon: "🔒",
    },
    {
      title: "IT Consulting and Strateg",
      description:
        "Empower your business with expert IT consulting and strategy: At Ambispine Technologies, we guide you through digital transformation with tailored solutions that drive efficiency and growth. From cloud migrations to strategic IT planning, we offer insights and services that streamline operations and boost your competitive edge.",
      icon: "📋",
    },
  ];

  return (
    <div className="benefits-bussi-container">
      <h1>The Benefits of Our Business Continuity Solutions</h1>

      <div className="benefits-bussi-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-bussi-card">
            <div className="benefit-bussi-icon">{benefit.icon}</div>
            <h3 className="text-white">{benefit.title}</h3>
            <p className="text-white">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Consultation Section */}
      <section className="consultation_business-section">
        <div className="consultation1-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn">Consult Now →</button>
        </div>
      </section>
    </div>
  );
};

export default BusinessBenefits;
