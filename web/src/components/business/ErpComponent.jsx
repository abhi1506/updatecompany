import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import businessImage from "../../assets/erp.jpg";
import inventoryImage from "../../assets/Inventory.png";
import financialImage from "../../assets/financialanalysis1.jpg";
import workforceImage from "../../assets/workforce.png";
import "./Erp.css"
import FAQ from '../card/FaqsSection';
const faq=[
  { question: "What is an ERP system?", answer: "An ERP system integrates and manages core business processes." },
  { question: "Is training provided?", answer: "Yes, we offer training sessions for all our plans." },
  { question: "Is customer support available?", answer: "Absolutely! 24/7 customer support is included." },
]
const HeroSection = () => {
    const handleScrollDown = () => {
        const nextSection = document.querySelector(".container-erp");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
return(    
     <section className="hero_erp">
            <div className="hero-content_erp">
              <h1>Simplify Business Operations with Our ERP Solutions</h1>
              <p>
              Comprehensive tools to manage finance, inventory, and workflows in one place.
              </p>
              <button className="cta-button_erp" onClick={handleScrollDown}>Read More</button>
            </div>
            <div className="hero-image_erp">
              <img
                src={businessImage}
                alt="Business professional"
                className="professional-image-erp"
              />
            </div>
          </section>
)};

const FeaturesSection = () => (
    <section className="my-5">
      <div className="container container-erp">
        <h2 className="text-center mb-5 font-weight-bold text-primary-erp">ERP Features</h2>
        <div className="row">
          {[ 
            { title: "Inventory Management", text: "Track and optimize inventory levels efficiently.", img: inventoryImage },
            { title: "Financial Analytics", text: "Monitor financial performance with real-time insights.", img:financialImage  },
            { title: "Workforce Management", text: "Streamline HR and payroll processes seamlessly.", img: workforceImage },
          ].map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-lg border-0 rounded-lg card-erp">
                <img src={feature.img} className="card-img-top  card-erp-img-top rounded-top" alt={feature.title} />
                <div className="card-body">
                  <h5 className=" card-erp-title font-weight-bold text-dark">{feature.title}</h5>
                  <p className=" card-erp-text text-muted">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  

const TestimonialsSection = () => (
  <section className="my-5 bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-5">What Our Clients Say</h2>
      <Carousel>
        {[
          { quote: "This ERP system revolutionized our business processes!", client: "John Doe, CEO" },
          { quote: "Exceptional features and easy to use.", client: "Jane Smith, Manager" },
          { quote: "Highly recommend it for growing companies.", client: "Mike Johnson, CTO" },
        ].map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="text-center">
              <p className="lead">"{testimonial.quote}"</p>
              <p>- {testimonial.client}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </section>
);
const HowItWorksSection = () => (
  <section className="how-it-works my-5 py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5">How It Works</h2>
      <p className="text-center lead mb-5">
        Discover how AmbiSpine Technologies simplifies business processes with our advanced ERP system.
      </p>
      <div className="row">
        {[
          { step: "1", title: "Sign Up", text: "Create an account with AmbiSpine Technologies to get started." },
          { step: "2", title: "Setup", text: "Customize the ERP system to meet your unique business needs." },
          { step: "3", title: "Manage", text: "Monitor and manage your operations efficiently with our tools." },
        ].map((process, index) => (
          <div className="col-md-4 text-center" key={index}>
            <div className="step-box mb-4">
              <div className="step-number display-4 text-white font-weight-bold">{process.step}</div>
              <h5 className="font-weight-bold mt-3">{process.title}</h5>
              <p>{process.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);








const CallToActionSection = () => (
    <section className="consultation_business-section">
    <div className="consultation1-box">
      <h3>Get Free Consultation Now!.</h3>
      <p>Let's create a powerful website that grows with your business</p>
      <button className="consult-btn">Consult Now →</button>
    </div>
  </section>
);

const ERPComponent = () => (
  <div>
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FAQ faqs={faq} />
    <CallToActionSection />
  </div>
);

export default ERPComponent;
