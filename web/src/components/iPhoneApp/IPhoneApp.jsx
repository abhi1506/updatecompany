import React, { Fragment } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./IPhoneApp.css";
import iphoneImage from "../../assets/iphone-1.jpg";
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
    FaUserTie, FaUsers, FaDollarSign

 } from 'react-icons/fa';
 import heroImg from "../../assets/iphone.avif"
 import { GiShakingHands } from "react-icons/gi";
import FaqSection from "../card/FaqsSection";
import OurCustomersSection from "../card/OurCustomersSection";
import ProcessCard from "../card/ProcessCard";
import HeroSection from "../card/Hero/HeroSections";
import styles from "../../common/common.module.css"

const faqs = [
  {
    question: "Does your iOS app development company sign an NDA to keep my app secure?",
    answer: "Ans : Yes. The first task of our team is to sign an NDA to maintain the app's security and privacy. You can trust us that your iOS app development ideas will be completely safe. So, Get the desirable app with our top iOS app development company.",
  },
  {
    question: "How long does it take to create a website?",
    answer: "The timeline depends on the complexity of the project, but typically ranges from 4 to 12 weeks.",
  },
  {
    question: "Can I update my website after it's launched?",
    answer: "Yes, we provide user-friendly CMS solutions or ongoing maintenance services for updates.",
  },
];

const works = [
    {
      Icon: <FaApple size={30}  />, 
      title: "Custom iPhone App Development:",
      description: "We craft tailored iOS apps that align with your unique business goals and objectives.",
    },
    {
      Icon: <FaClipboardCheck size={30}  />,
      title: "App Consulting",
      description: "Our expert consultants help you define your app requirements, identify target audiences, and determine the best features and functionalities for your app.",
    },
    {
      Icon: <FaPaintBrush size={30} />,
      title: "App Design",
      description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
    },
    {
      Icon: <FaCode size={30}  />,
      title: "App Development",
      description: "Our experienced developers build robust, scalable, and secure iOS apps using the latest technologies and frameworks.",
    },
    {
      Icon: <FaBug size={30}  />, 
      title: "App Testing and Quality Assurance",
      description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
    },
  ];
      

  const cardsData = [
    {
      title: "Expert Team",
      description:
        "Our seasoned iPhone app development team boasts extensive experience, delivering high-quality solutions that exceed expectations.",
      icon: <FaUsers size={30} />,
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize your goals, objectives, and unique requirements, tailoring our services to meet your needs and ensure your success.",
      icon: <FaUserTie size={30} />,
    },
    {
      title: "Agile Methodology",
      description:
        "Our flexible approach adapts to changing requirements, ensuring efficient, timely, and hassle-free project delivery.",
      icon: <GiShakingHands size={30} />,
    },
    {
      title: "Cost-Effective",
      description:
        "We optimize resources and streamline processes to deliver high-quality solutions within your budget.",
      icon: <FaDollarSign size={30} />,
    },
  ];

const IphoneComponent = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment className="ios-aap-development">
    
    
<HeroSection
  title="IOS App Development Services"
  subtitle="Revolutionize your business, enhance customer engagement, and drive
          growth. With Apple's stringent quality standards and loyal user base, investing in iOS
           app development can help you tap into a lucrative market and stay ahead of the competition"
  onScrollDown={handleScrollDown}
  heroId="custom-hero"
  backgroundImage={heroImg}
  className="gradient-background" 
/>
           
      <section className="our-customers-container wrapper next-section">
        <div className={styles.sectionGrid}>
        <div className={styles.sectionText}>
        <h2 className="">We are your Hero for iPhone App Development Solutions.</h2>
<p>
Every detail is crafted with precision and undergoes multiple rounds of rigorous testing.  
Our dedicated team is committed to delivering comprehensive iPhone app development services under one roof.  
Our iPhone app development expertise has empowered clients to achieve their goals and thrive in their industries.
</p>

        </div>
        <div className={styles.sectionImage}>
          <img src={iphoneImage} alt="What We Do"/>
        </div>
        </div>
      </section>


     
      <section className="wrapper nextSection">
  <div className="servicesWork">
    <h1 className="sectionTitles fwBold">Our comprehensive services include</h1>
    <p className="sectionSubtitle fwNormal">
      Mobulous specializes in providing the best iOS app development services to clients. Our experts create feature-rich and custom iOS apps tailored to your specific business needs and
      requirements, ensuring leading-edge quality and user satisfaction.
    </p>
    <div className="servicesGallery">
      {works.map((work, index) => (
        <div className="servicesCard" key={index}>
          <div>{work.Icon}</div>
          <div className="servicesDetails">
            <h4 className="fwSemiBold">{work.title}</h4>
            <p>{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


   
    <ProcessCard cardsData={cardsData}/>


< OurCustomersSection/>
     

<div className="faqsSection">
   
    <FaqSection faqs={faqs}/>
</div>
    </Fragment>
  );
};

export default IphoneComponent;
