import React, { useState } from 'react';
import './ResponsiveWebDesign.css';
import ResponsiveWeb1 from '../../assets/wevdes.jpg';
import ResponsiveWeb2 from './../../images/ResponsiveWeb2.png';
import ResponsiveWeb3 from './../../images/ResponsiveWeb3.webp'
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiDatabase2Fill } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { SiAudiotechnica } from "react-icons/si";
import { BsPersonCircle } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import QuotationForm from '../form/QuotationForm';
import styles from "../../common/common.module.css";
import FaqAndConsultation from '../card/FaqAndConsultation';
const icons = [
  { Component: AiOutlineHtml5, className: 'res_icon' },
  { Component: IoLogoCss3, className: 'res_icon' },
  { Component: FaReact, className: 'res_icon' },
  { Component: RiDatabase2Fill, className: 'res_icon' },
];
const faqs = [
  {
    question: "What is responsive web design?",
    answer:
      "Responsive web design is an approach to web development that ensures a website looks and functions well on all devices, from desktops to smartphones. It adjusts layout, images, and navigation to provide an optimal viewing experience."
  },
  {
    question: "Why is responsive web design important?",
    answer:
      "Responsive web design ensures that your website is accessible and user-friendly across a variety of devices, improving user experience and boosting SEO rankings."
  },
  {
    question: "How does responsive design benefit my business?",
    answer:
      "It helps increase user engagement, reduces bounce rates, and ensures your website remains competitive. It also eliminates the need for multiple versions of your website, saving time and cost."
  },
  {
    question: "What technologies are used in responsive web design?",
    answer:
      "Technologies like HTML5, CSS3 (including media queries), JavaScript frameworks, and tools like Bootstrap are commonly used to create responsive web designs."
  },
  {
    question: "How long does it take to design a responsive website?",
    answer:
      "The time required depends on the complexity of the website. A basic responsive website may take a few weeks, while more complex designs with advanced features could take longer."
  },
];
const features = [
  { title: "Creative Approach", description: "Price/Cost is obviously one of the main concerns with any venture or small Business man or individual Person", icon: SiAudiotechnica },
  { title: "Experienced Professionals", description: "Price/Const is obviously one of the main concerns with any venture or small Business man or individual person", icon: IoTimerOutline },
  { title: "Experienced Professionals", description: "Price/Const is obviously one of the main concerns any venture or small Business man or individual person ", icon: BsPersonCircle },
  { title: "Technically Sound", description: "Price/Cost is obviously one of the main concerns with any venture or small Business man or individual person ", icon: GrServices },
];

function IconList() {
  return (
    <div style={{ marginTop: "60px" }} className='icon-li'>
      {icons.map(({ Component, className }, index) => (
        <Component key={index} className={className} />
      ))}
    </div>
  );
}

function FeatureList() {

  return (
    <div className="row different-list">
      {features.map(({ title, description, icon: Icon }, index) => (
        <div key={index} className="col-12 col-lg-6 different-item d-flex px-5 py-3">
          <Icon className="different-icon res_diffe_icon me-4" />
          <div className="different-text">
            <h4 className="different-title">{title}</h4>
            <p className="different-description">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default function ResponsiveWebDesign() {
 
  return (
    <div style={{ marginTop: "60px" }}>
      <section className="Responsive_top">
        <img src={ResponsiveWeb1} className="responsive1" alt="responsive top" />
        <div className="overlay">
          <h1 className="responsive-header">Responsive Web Designing</h1>
          <h5  className="responsive-description"> Ambispine Technologies specializes in Responsive Web Designing (RWD), creating seamless, user-friendly websites that adapt to all devices, ensuring optimal performance and exceptional user experiences across desktops, tablets, and smartphones. </h5>
          
          <IconList />
        </div>
      </section>

      <section>
  <div  className={styles.sectionGrid}>
    <div className={styles.sectionText}>
      <h2>
        Responsive Web Designing
      </h2>
      <h6 className="fw-bold text-dark">
        Website You Love and Your Customers Love
      </h6>
      <p>
      At Ambispine Technologies, we create responsive websites that provide a seamless experience across all devices. Our approach focuses on understanding business goals, crafting custom designs, and ensuring SEO optimization. We conduct thorough testing for compliance, compatibility, and performance, delivering fast, error-free websites that drive engagement and conversions. 
      </p>
      <p>
      Our process begins with a deep understanding of what your website needs to achieve and identifying your target audience. By analyzing your business goals, we recommend SEO-friendly domain names and reliable web hosting solutions that align with your requirements. Once the foundation is set, we focus on designing a visually appealing and functional website tailored to your brand and market trends. Every design element is created to enhance user interaction and deliver a seamless experience across devices
      </p>
    </div>
    <div className={styles.sectionImage}>
        <img
          src={ResponsiveWeb2}
          className="process-design"
          alt="design process"
        />
      </div>
  </div>
</section>

      
      <section>
      <div className='web-container' >
            <div style={{width:"70%", margin:"auto"}}>
            <h1 className='web-header'>Responsive Web Designing</h1>
            <p className='web-text'>Understanding what a website needs to do, and who your audience is?
            Suggest domain name and web hosting as per your requirements
            Start designing according to customer's and market requirements in term of
            visualization.
            Website testing, it covers w3c validation / browser compatibility / fast
            downloading and error free site.
            Ready to visible in Search engines.</p>
            <p className='web-text'>Understanding what a website needs to do, and who your audience is?
            Suggest domain name and web hosting as per your requirements
            Start designing according to customer's and market requirements in term of
            .</p>
            </div>
    </div>
      </section>

      <section className="different-section py-5">
  <h2 className="text-primary text-center mb-4">What’s make us different?</h2>
  <div className="feature-container">
    <FeatureList />
  </div>
</section>

<div className="desired-output-container">
  <img 
    src={ResponsiveWeb3} 
    className="w-100 img-fluid" 
    alt="Responsive web design illustration" 
  />
</div>
<FaqAndConsultation faqs={faqs}/>

    </div>
  );
}
