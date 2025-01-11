import React, { Fragment } from 'react'
import "./SearchEngine.css";
import { FaArrowDown } from "react-icons/fa";
import cloudServicesImage from "../../assets/cloud-services.jpg";
import searchImage from "../../assets/Asset-5-768x483.webp";
import searchImage1 from "../../assets/search-engine.webp";
import searchImage2 from "../../assets/search-1.jpeg";
import searchImage5 from "../../assets/search-2.png";
import searchImage3 from "../../assets/search-3.jpg";
import searchImage4 from "../../assets/search-4.png";
import FAQ from "../card/FaqsSection";
import OurCustomersSection from '../card/OurCustomersSection';
import heroImg from "../../assets/search-engine-marketing.jpg"
import HeroSection from '../card/Hero/HeroSections';
import styles from "../../common/common.module.css";

const faqs = [
  {
    question: "What is SEO and why is it important?",
    answer: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results, driving more organic traffic to your site and improving visibility.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO results typically take 3-6 months to become noticeable, depending on the competition, target keywords, and your website’s current SEO health.",
  },
  {
    question: "Do I need SEO if my website already gets traffic?",
    answer: "Yes! Even if you are receiving traffic, SEO can help you further optimize your website for better conversion rates, increased visibility, and sustained growth over time.",
  },
  {
    question: "Can SEO help my local business?",
    answer: "Absolutely! Local SEO is essential for businesses aiming to attract customers within a specific geographic area. It helps improve visibility in local search results.",
  },
  {
    question: "Will SEO work for any business?",
    answer: "Yes, SEO is beneficial for businesses across all industries. Whether you're in e-commerce, healthcare, or real estate, SEO can help you reach a wider audience and drive quality traffic.",
  },
  {
    question: "How do you measure the success of an SEO campaign?",
    answer: "We measure SEO success through metrics like keyword rankings, organic traffic growth, conversion rates, and return on investment (ROI). Regular reports are provided to track progress.",
  },
];
const cardsData = [
  {
    title: "Content SEO",
    description: "We provide top-notch content writing services tailored to your needs.",
    imageSrc: cloudServicesImage, 
  },
  {
    title: "Web Development",
    description: "Build modern, responsive, and user-friendly websites with our team.",
    imageSrc: cloudServicesImage, 
  },
  {
    title: "SEO Links",
    description: "Boost your online presence with our digital marketing solutions.",
    imageSrc: cloudServicesImage, 
  },
];

  

const   SearchEngine = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".section-grid");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment>
      <HeroSection
  title="Search Engine Optimization Service"
  subtitle="  Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help
          in boosting the revenue and gaining maximum growth. In this era of tec"
  onScrollDown={handleScrollDown}
  heroId="custom-hero"
  backgroundImage={heroImg}
  className="gradient-background" 
/>

     
      <section className="Content-writing-container ">
  <div  className={styles.sectionGrid}>
   
    <div className={styles.sectionImage}>
  <img
    src={searchImage1}
    alt="Content Writing Services Illustration"
  />
</div>


   
    <div  className={styles.sectionText}>
      <h2>Search Engine Optimization Service</h2>
      <p>
        Technology helps things get better! It helps things get smaller,
        faster, and easier. Your Android app should boost your company’s
        image and offer features that your audience can easily use. Android
        applications play a key role in increasing revenue and achieving
        maximum growth.
      </p>
    </div>
  </div>
</section>

<div className='wrapper'>
  <div className="cube-container">
  <div className="cube">
    <div className="face front">
      <img src={searchImage} alt="Front Face" />
    </div>
    <div className="face back">
      <img src={searchImage5} alt="Back Face" />
    </div>
    <div className="face top">
      <img src={searchImage2} alt="Top Face" />
    </div>
    <div className="face bottom">
      <img src={searchImage3} alt="Bottom Face" />
    </div>
    <div className="face left">
      <img src={searchImage4} alt="Left Face" />
    </div>
    <div className="face right">
      <img src={searchImage} alt="Right Face" />
    </div>
  </div>
</div>

</div>
{/* Our Effective Writing Section */}
<section className="wrapper">
  <div className="wrapper-1200">
    <h1 className="fw-bold">Core metrics that search engines evaluatest</h1>
    <p className="content-description">
    Let us help you create a stunning website that drives engagement, boosts conversions, and takes your business 
    </p>
  </div>
  <div className="core-container">
  <div className="content-card">
    {cardsData.map((card, index) => (
      <div className="core-card" key={index}>
        {/* Image Section */}
        <div className="core-image">
          <img src={card.imageSrc} alt={card.title} />
        </div>
        {/* Text Section */}
        <div className="core-body">
          <h3 className="core-title">{card.title}</h3>
          <p className="core-description">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

</section>

<section className="wrapper">
  <div className="why-us wrapper-1000">
    <div className="row align-items-center">
      <div className="col-md-6 why-us-content">
        <h3 className="fw-bold">Why Us?</h3>
        <p>
          SEO is not about ranking for popular terms; it's all about being found
          everywhere, when it matters the most. If you choose us as partners,
          we will make sure that we take a full audit of your entire website,
          including keywords, content, and page structure as well.
        </p>
        <p>
          Our dedicated team ensures that your brand is optimized for the
          competitive digital world. From strategy to execution, we help you
          drive organic growth and stay ahead.
        </p>
      </div>

      <div className="col-md-6 why-us-img d-flex justify-content-center">
        <img
          src={searchImage}
          alt="Why Choose Us"
          className="img-fluid"
        />
      </div>
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

export default    SearchEngine;
