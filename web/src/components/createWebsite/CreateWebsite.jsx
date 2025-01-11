import React, { Fragment } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./CreateWebsite.css";
import webImage1 from "../../assets/website-1.jpg";
import webImage2 from "../../assets/website-2.jpg";
import modernStoreImage2 from "../../assets/modernStore.png";
import websiteTemplateImage from "../../assets/website-template.jpg";
import portfolioWebsiteImage from "../../assets/portfolioWebsite.png";
import { LiaHandshake } from "react-icons/lia";
import { MdOutlineLaptopChromebook, MdDevices,MdSearch, MdSecurity, MdAccessibility } from "react-icons/md";
import FaqAndConsultation from "../card/FaqAndConsultation";
import HeroSection from "../card/Hero/HeroSections";
import heroImg from "../../assets/website.jpg";
import styles from "../../common/common.module.css";

const faqs = [
  {
    question: "What industries do you cater to when creating websites?",
    answer:
      "We create websites for various industries, including e-commerce, healthcare, education, real estate, and more.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we offer ongoing maintenance services to keep your website up-to-date and running smoothly.",
  },
  {
    question: "Can I integrate third-party tools and APIs into my website?",
    answer:
      "Absolutely! We can integrate a variety of third-party tools and APIs to enhance your website's functionality.",
  },
];


const works = [
    {
      image: modernStoreImage2,
      alt: "Modern E-Commerce Store",
      title: "Modern E-Commerce Store",
      description:
        "A feature-rich e-commerce platform designed for seamless user experience and high conversion rates.",
    },
    {
      image: portfolioWebsiteImage,
      alt: "Portfolio Website",
      title: "Portfolio Website",
      description:
        "A visually stunning portfolio website that showcases the brand's creativity and expertise.",
    },
    {
      image: websiteTemplateImage,
      alt: "Corporate Website",
      title: "Corporate Website",
      description:
        "A professional corporate website built to strengthen the brand's online presence and trust.",
    },
    
  ];

const CreateWebsite = () => {
  
    const cardsData = [
        {
          title: "Consultation",
          description:
            "We start by listening to you. Our team dives deep into understanding your goals, audience, and brand identity to create a strategy that aligns with your vision.",
          icon: <LiaHandshake />,
        },
        {
          title: "Planning",
          description:
            "Next, we sketch your vision with wireframes and mockups, ensuring a clear roadmap before development begins.",
          icon: <LiaHandshake />,
        },
        {
          title: "Design & Development",
          description:
            "With creativity and precision, we design stunning visuals and develop a website that is both functional and visually appealing.",
          icon: <LiaHandshake />,
        },
        {
          title: "Testing & Launch",
          description:
            "We rigorously test every aspect of your website to ensure a flawless user experience, then launch it for the world to see",
          icon: <LiaHandshake />,
        },
        {
          title: "Post-Launch Support",
          description:
            "Our journey doesn’t end with the launh. We provide ongoing support and updates to keep your website fresh and effective",
          icon: <LiaHandshake />,
        },
      ];
      const handleScrollDown = () => {
      
        const nextSection = document.querySelector(".next-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
   
      
    <Fragment>
              
      <HeroSection
              title="We Create Websites That Leave a Lasting Impression."
              subtitle="Custom, responsive, and high-performing websites designed to
elevate your brand and drive results."
              onScrollDown={handleScrollDown}
              heroId="custom-hero"
              backgroundImage={heroImg}
              className="gradient-background" 
            />

      <section className="what-we-do-container next-section wrapper">
        <div className={styles.sectionGrid}>
        <div className={styles.sectionText}>
          <h2>What We Do</h2>
          <p>
              AmbiSpine Technologies, we specialize in creating beautiful and functional websites 
              that reflect your brand’s identity. Whether you're a startup or an established business, 
              our designs are tailored to meet your specific goals. With successful projects completed, 
              our team ensures a perfect blend of creativity and technology.
          </p>
        </div>
        <div className={styles.sectionImage}>
          <img src={webImage1} alt="What We Do"  />
        </div>
        </div>
      </section>

      <section className="wrapper">
  <div className="sky-gradient">
    <h1 className="fw-bold text-center">Why Choose Us?</h1>
    <div className="features">
      <div className="features-img">
        <img src={webImage2} alt="Custom Design" />
      </div>
      <div className="features-text">
        <p>
          <MdOutlineLaptopChromebook className="features-icon" />
          Custom Designs: Every website is unique and tailored to your brand.
        </p>
        <p>
          <MdDevices className="features-icon" />
          Fully Responsive: Optimized for all devices—desktop, tablet, and mobile.
        </p>
        <p>
          <MdSearch className="features-icon" />
          SEO Optimized: Designed to rank higher on search engines.
        </p>
        <p>
          <MdSecurity className="features-icon" />
          Fast & Secure: We prioritize performance and security.
        </p>
        <p>
          <MdAccessibility className="features-icon" />
          User-Friendly Interface: Easy navigation for a seamless user experience.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="our-work-container wrapper">
       <div className="our-work">
       <h1 className="our-work-section-title fw-bold">Our Work Speaks for Itself</h1>
        <p className="our-work-section-subtitle fw-normal">
          Explore some of the incredible websites we've created for our clients. From e-commerce platforms to corporate portfolios,
          every project reflects our commitment to quality and innovation.
        </p>
        <div className="work-gallery">
        {works.map((work, index) => (
        <div className="work-card" key={index}>
          <img src={work.image} alt={work.alt} />
          <div className="work-details">
            <h4 className="fw-bold">{work.title}</h4>
            <p className="">{work.description}</p>
          </div>
        </div>
      ))}
        </div>
       </div>
      </section>


    <section className="design-process">
  <h1 className="design-title fw-bold mb-5">Our Design Process</h1>
  <div className="design-cards-container">
    {cardsData.map((card, index) => (
      <div className="design-card" key={index}>
        <div className="design-icon">{card.icon}</div>
        <h5 className="mt-2 text-dark fs-6 fw-bold">{card.title}</h5>
        <p style={{ fontSize: '1rem' }}>{card.description}</p>
      </div>
    ))}
  </div>
</section>


  <FaqAndConsultation faqs={faqs}/>
    </Fragment>
  );
};

export default CreateWebsite;
