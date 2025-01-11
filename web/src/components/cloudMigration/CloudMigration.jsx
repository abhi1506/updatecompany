import React, { Fragment } from "react";
import "./CloudMigration.css"
import { FaArrowDown } from "react-icons/fa";
import cloudServicesImage from "../../assets/CloudSolution4.png";
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
    FaUserTie, FaUsers, FaRegClock, FaDollarSign
} from 'react-icons/fa';
import FAQ from "../card/FaqsSection";
import StayCards from "./StayCards";
import OurCustomersSection from "../card/OurCustomersSection";
import heroImg from '../../assets/Cloud-2.jpg'
import HeroSection from "../card/Hero/HeroSections";
import styles from "../../common/common.module.css"
const faqs = [
  {
    question: "What is cloud migration?",
    answer: "Cloud migration refers to the process of moving data, applications, and other business elements from on-premises infrastructure to the cloud, or from one cloud to another. It helps businesses improve scalability, reduce costs, and enhance flexibility.",
  },
  {
    question: "Why should I migrate to the cloud?",
    answer: "Migrating to the cloud offers numerous benefits, such as cost savings, improved accessibility, enhanced security, better scalability, and the ability to leverage cutting-edge technologies without managing on-prem infrastructure.",
  },
  {
    question: "What types of data migration services do you offer?",
    answer: "We offer various data migration services, including data transfer to the cloud, cloud-to-cloud migrations, database migration, application migration, and hybrid cloud setups, ensuring minimal downtime and data integrity during the process.",
  },
  {
    question: "How long does a cloud migration take?",
    answer: "The time it takes to complete a cloud migration depends on the complexity and size of the data, the number of applications involved, and your organization's readiness. On average, it can take anywhere from a few weeks to several months.",
  },
  {
    question: "Is my data safe during migration?",
    answer: "Yes, we prioritize data security during migration. Our experts follow best practices for encryption, secure transfer protocols, and backup strategies to ensure the safety and integrity of your data throughout the migration process.",
  },
  {
    question: "What are the costs associated with cloud migration?",
    answer: "The cost of cloud migration depends on the scope of your project, the volume of data, and the complexity of your applications. We provide customized solutions based on your needs and will work with you to design a cost-effective migration plan.",
  },
  {
    question: "What cloud platforms do you support?",
    answer: "We support a wide range of cloud platforms, including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and others, ensuring that we can provide the best fit for your business requirements.",
  },
  {
    question: "Do you offer ongoing support after migration?",
    answer: "Yes, we offer ongoing support and maintenance services after the migration to ensure that your cloud infrastructure runs smoothly. Our team can assist with monitoring, troubleshooting, and optimization to help you get the most out of your cloud environment.",
  },
];

const cardsData = [
    {
      title: "Expert Team",
      description:
        " Our cloud migration team offers seamless and efficient services, ensuring smooth transitions to the cloud with minimal disruption and maximum scalability.",
      icon: <FaUserTie size={30} color="#007bff" />, // Icon representing expertise
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize your goals, objectives, and unique requirements, tailoring our services to meet your needs and ensure your success.",
      icon: <FaUsers size={30} color="#28a745" />, // Icon representing customer focus
    },
    {
      title: "Cost-Effective",
      description:
        "We optimize resources and streamline processes to deliver high-quality solutions within your budget.",
      icon: <FaDollarSign size={30} color="#dc3545" />, // Icon representing cost-effectiveness
    },
  ];

const  CloudMigration = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".section-grid");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment>

      <HeroSection
  title="Cloud Solution and Data Migration"
  subtitle=" Think Web Hub.Start Designs is an emerging web development company
          that offers website development services. ."
  onScrollDown={handleScrollDown}
  heroId="custom-hero"
  backgroundImage={heroImg}
  className="gradient-background" 
/>

     
<section className="cloud-migrations-container">
  <div className={styles.sectionGrid}>
    <div  className={styles.sectionText}>
    <h2>
    Cloud Solution and Data Migration:  “Transform Your Digital Landscape”
    </h2>
      <p>
        Empower your business with seamless cloud technologies and efficient data migration strategies.
      </p>
    </div>
    <div className={styles.sectionImage}>
      <img src={cloudServicesImage} alt="What We Do" className="image" />
    </div>
  </div>
</section>

 
<section className="unlock-cloud-section">
    <div className="unlock-cloud-section-container">
        <h2>Unlock the Power of the Cloud</h2>
        <p>Explore our tailored cloud solutions and expert data migration service</p>
    </div>
</section>


     

<section className="tool-cloud-section">
  <div className="tool-cloud-process">
  <h1 className="tool-cloud-title mb-5 ">
  We Use Leading Open-Source, On-Premise, & Cloud- Based Data Migration Tools
  </h1>
  <p>Our data migration experts have global, multi-industry experience
  executing business solutions using proven, digitally-gathered data methodologies, practices, and tools.</p>
  <div className="tool-cards-container">
    {cardsData.map((card, index) => (
      <div className="tool-cloud-card" key={index}>
        <div className="cloud-iconss">{card.icon}</div>
        <h5 className="mt-2 cloud-card-title fs-6 fw-bold" style={{textAlign:'left'}}>{card.title}</h5>
        <p className="cloud-card-text" style={{textAlign:'left',fontSize:'0.8rem'}}>{card.description}</p>
      </div>
    ))}
  </div>
  </div>
</section>

<section className="Stay-section">
  <div className="Stay-process">
  <h2 className="Stay-title fw-bold mb-1">
  Stay On Top With Our Cloud Migration Specifications
  </h2>
  <p>Our data migration experts have global, multi-industry experience
  executing business solutions using proven, digitally-gathered data methodologies, practices, and tools.</p>
  <div>
    <StayCards/>
  </div>
  </div>
</section>

<OurCustomersSection/>
     

<div className="faqs-section">
   
    <FAQ faqs={faqs}/>
</div>
    </Fragment>
  );
};

export default  CloudMigration;
