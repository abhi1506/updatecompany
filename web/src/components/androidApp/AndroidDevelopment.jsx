import React, { Fragment } from "react";
import "./Android.css"
import { FaArrowDown } from "react-icons/fa";
import cloudServicesImage from "../../assets/cloud-services.jpg";
import androidImage from "../../assets/mobile-app-development.jpg";
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
    FaUserTie, FaUsers, FaDollarSign
} from 'react-icons/fa';
import styles from "../../common/common.module.css"
import { GiShakingHands } from "react-icons/gi";
import FAQ from "../card/FaqsSection";
import ProcessCard from "../card/ProcessCard";
import OurCustomersSection from "../card/OurCustomersSection";
import androidImage1 from "../../assets/samsung-android-15-verspaetet-sich.webp"
import HeroSection from "../card/Hero/HeroSections";
const faqs = [
  {
    question: "Does your Android app development company sign an NDA to secure my app idea?",
    answer: "Yes, we prioritize the confidentiality of your app idea and sign an NDA before beginning any project. Your Android app development concept is in safe hands.",
  },
  {
    question: "How long does it take to develop an Android app?",
    answer: "The time required depends on the complexity and features of the app. On average, it can take 8 to 20 weeks to develop a fully functional Android application.",
  },
  {
    question: "Do you provide support after the Android app is launched?",
    answer: "Yes, we offer post-launch support and maintenance to ensure your app runs smoothly and stays up-to-date.",
  },
  {
    question: "Can you develop custom Android apps for specific industries?",
    answer: "Absolutely! We specialize in creating tailored Android applications for various industries, including healthcare, e-commerce, finance, education, and more.",
  },
  {
    question: "What technologies do you use for Android app development?",
    answer: "We use a variety of technologies including Kotlin, Java, and Android Studio, ensuring a seamless and efficient development process.",
  },
  {
    question: "Do you assist with publishing Android apps on the Google Play Store?",
    answer: "Yes, we handle the entire app submission process, ensuring compliance with Google Play Store guidelines for a successful launch.",
  },
];


const works = [
    {
      Icon: <FaApple size={30} color="#000" />, 
      title: "Custom Android App Development",
      description: "We craft tailored Android apps that align with your unique business goals and objectives.",
    },
    {
      Icon: <FaClipboardCheck size={30} color="#28a745" />,
      title: "App Consulting",
      description: "Our expert consultants help you define your app requirements, identify target audiences, and determine the best features and functionalities for your app.",
    },
    {
      Icon: <FaPaintBrush size={30} color="#ff5722" />,
      title: "App Design",
      description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
    },
    {
      Icon: <FaCode size={30} color="#673ab7" />,
      title: "App Development",
      description: "Our experienced developers create robust, scalable, and secure Android apps using the latest technologies and frameworks.",
    },
    {
      Icon: <FaBug size={30} color="#dc3545" />, 
      title: "App Testing and Quality Assurance",
      description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
    },
  ];
      

  const cardsData = [
    {
      title: "Expert Team",
      description:
        "Our skilled Android app development team brings years of expertise, crafting high-performance solutions that surpass client expectations.",
      icon: <FaUsers size={30}  />, 
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize your goals, objectives, and unique requirements, tailoring our services to meet your needs and ensure your success.",
      icon: <FaUserTie size={30}  />, 
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

const  AndroidDevelopment = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment>
      <HeroSection
  title="Android App Development Services"
  subtitle="Technology helps things get better!! It helps things get smaller, faster, and easier much and much 
    better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help in boosting 
    the revenue and gaining maximum growth. In this era of technology where mobile is a priority i"
  onScrollDown={handleScrollDown}
  heroId="custom-hero"
  backgroundImage={androidImage}
  className="gradient-background" 
/>


  
      <section className="our-customers-container wrapper next-section">
        <div  className={styles.sectionGrid}>
        <div className={styles.sectionText}>
        <h2 className="">We are your Hero for Android App Development Solutions.</h2>
          <p>
          place and each feature goes into multiple rounds of testing.
Our dedicated team works round the clock to provide a wide range of Android app development services under one roof. Our Android app development skills have helped our clients achieve their goals and succeed in their respective industries.

          </p>
        </div>
        <div className={styles.sectionImage}>
          <img src={androidImage1} alt="What We Do"/>
        </div>
        </div>
      </section>
     

      <section className="comprehensive-services wrapper">
       <div className="services-work">
       <h1 className="section-titles fw-bold">Our comprehensive services include</h1>
        <p className="section-subtitle fw-normal">
        Mobulous excels in delivering high-quality Android app development, creating custom, feature-packed apps to meet your business needs, ensuring optimal performance and user satisfaction.
        </p>
        <div className="services-gallery">
        {works.map((work, index) => (
        <div className="services-card" key={index}>
             <div className="">{work.Icon}</div>
          <div className="services-details">
            <h4 className="fw-semibold">{work.title}</h4>
            <p className="">{work.description}</p>
          </div>
        </div>
      ))}
        </div>
       </div>
      </section>

    
  <ProcessCard cardsData={cardsData}/>
 


<OurCustomersSection/>

<div className="faqs-section">
    <FAQ faqs={faqs}/>
</div>
    </Fragment>
  );
};

export default  AndroidDevelopment;
