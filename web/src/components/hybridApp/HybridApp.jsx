import React, { Fragment, useState } from "react";
import "./HybridApp.css";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import hybridImg from "../../assets/hybrid.jpg";
import {
  FaApple,
  FaClipboardCheck,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaUserTie,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";
import QuotationForm from "../form/QuotationForm";
import HeroSection from "../card/Hero/HeroSections";
import heroImg from "../../assets/web-1.jpg";
import styles from "../../common/common.module.css";

const faqs = [
  {
    question: "Does your iOS app development company sign an NDA to keep my app secure?",
    answer:
      "Ans : Yes. The first task of our team is to sign an NDA to maintain the app's security and privacy. You can trust us that your iOS app development ideas will be completely safe. So, Get the desirable app with our top iOS app development company.",
  },
  {
    question: "How long does it take to create a website?",
    answer:
      "The timeline depends on the complexity of the project, but typically ranges from 4 to 12 weeks.",
  },
  {
    question: "Can I update my website after it's launched?",
    answer:
      "Yes, we provide user-friendly CMS solutions or ongoing maintenance services for updates.",
  },
];

const works = [
  {
    Icon: <FaApple size={30} />,
    title: "Custom Hybrid App Development",
    description: "We develop hybrid mobile apps that combine the best of native and web technologies, providing a seamless experience across platforms.",
  },
  {
    Icon: <FaClipboardCheck size={30} />,
    title: "App Consulting",
    description: "Our expert consultants help define your hybrid app's requirements, identify target audiences, and choose the right features for maximum impact.",
  },
  {
    Icon: <FaPaintBrush size={30} />,
    title: "App Design",
    description: "Our designers craft stunning and user-friendly hybrid app interfaces that are optimized for both iOS and Android, ensuring a great user experience.",
  },
  {
    Icon: <FaCode size={30} />,
    title: "App Development",
    description: "Our experienced developers build robust and scalable hybrid apps using the latest cross-platform technologies like React Native and Flutter.",
  },
  {
    Icon: <FaBug size={30} />,
    title: "App Testing and Quality Assurance",
    description: "We ensure that your hybrid app performs seamlessly across platforms with thorough testing and quality assurance processes, delivering a flawless user experience.",
  },
];

const cardsData = [
  {
    title: "Expert Team",
    description: "Our hybrid app development team combines the best of native and web technologies, delivering high-performance apps with wide platform compatibility.",
    icon: <FaUsers size={30} color="#fff" />,
  },
  {
    title: "Customer-Centric Approach",
    description: "We tailor our hybrid app development services to meet your specific business goals, ensuring your success in both the iOS and Android ecosystems.",
    icon: <FaUserTie size={30} color="#fff" />,
  },
  {
    title: "Agile Methodology",
    description: "We follow an agile development process to ensure flexibility and adaptability to your requirements, enabling faster delivery and smoother updates.",
    icon: <GiShakingHands size={30} color="#fff" />,
  },
  {
    title: "Cost-Effective",
    description: "We optimize both time and resources by developing cross-platform hybrid apps, allowing you to target iOS and Android users within a single codebase.",
    icon: <FaDollarSign size={30} color="#fff" />,
  },
];

const HybridApp = () => {
  const [consultActive, setConsultActive] = useState(false);

  const handleScrollDown = () => {
    const nextSection = document.querySelector(".nextSection");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsult = () => {
    setConsultActive(true);
  };

  return (
    <Fragment>
      <HeroSection
        title="Hybrid Mobile App Development"
        subtitle="Revolutionize your business, enhance customer engagement, and drive growth. With Apple's stringent quality standards and loyal user base, investing in iOS app development can help you tap into a lucrative market and stay ahead of the competition."
        onScrollDown={handleScrollDown}
        heroId="customHero"
        backgroundImage={heroImg}
        className="gradientBackground"
      />

      <section className="wrapper nextSection">
        <div className="w-75">
          <h1 className="sectionTitles fw-Bold">
            Explore Our Hybrid Application Development Potential
          </h1>
          <p className="sectionSubtitle fw-Normal">
            Our developers are industry-leading experts in hybrid mobile apps development, bringing their expertise and years of experience to help you create powerful applications optimized for all screen sizes
          </p>
        </div>
      </section>

      <section className="section hybrid">
        <div className={styles.sectionGrid}>
          <div className={styles.sectionText}>
            <h2>Hybrid Mobile App Development</h2>
            <p>
              In today's digital landscape, we empower businesses with innovative technologies that drive intelligent, data-driven insights and seamless interconnectivity. Our strategic approach transforms your digital strategy, delivering unparalleled business value across every touchpoint.
            </p>
          </div>
          <div className={styles.sectionImage}>
            <img
              src={hybridImg}
              alt="Innovative Mobile Solutions"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="developmentProcessHybrid">
        <div className="w-75">
          <h1 className="sectionTitle0">Our comprehensive services include</h1>
          <p className="sectionSubtitles0">
            **Mobulous specializes in hybrid app development, creating high-performance, cross-platform apps tailored to your business needs, ensuring seamless user experiences and scalability.**
          </p>
          <div>
            <div className="servicesGalleryHybrid">
              {works.map((work, index) => (
                <div className="servicesCardHybrid" key={index}>
                  <div className="servicesIconHybrid">{work.Icon}</div>
                  <div className="servicesDetailsHybrid">
                    <h4 className="fwSemiBoldHybrid">{work.title}</h4>
                    <p className="servicesDescriptionHybrid">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hybridProcess">
        <h1 className="sectionTitle text-Center">Why Choose Hybrid App Development?</h1>
        <p className="sectionSubtitles1">
          Hybrid mobile app development is becoming increasingly popular for its various benefits such as:
        </p>
        <div>
          <div className="hybridCardsContainer">
            {cardsData.map((card, index) => (
              <div className="hybridCards" key={index}>
                <div className="hybridCardsIcons" style={{ color: "#ffd700" }}>
                  {card.icon}
                </div>
                <h5 className="hybridCardsTitle">{card.title}</h5>
                <p className="hybridCardsDescription">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="hireDeveloperSection">
        <div className="hireDeveloperContent">
          <h1 className="hireDeveloperTitle">
            We believe in bringing the best to our customer
          </h1>
          <p className="hireDeveloperText">
            From visualization & concept to support we are a company with a benevolent attitude toward our clients and we are the friendliest Hybrid app Development Company you will come across!!
          </p>
          <div className="hireDeveloperActions">
            <button className="hireDeveloperButton" onClick={handleConsult}>
              Hire Hybrid App Developer <FaArrowRight /></button>
    </div>
  </div>
</div>
<section>
     
</section>

     

    </Fragment>
  );
};

export default HybridApp;
