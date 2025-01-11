import React, { Fragment } from 'react'
import "./ContentService.css";
import { FaArrowDown } from "react-icons/fa";
import cloudServicesImage from "../../assets/content-1.jpg";
import contentwritingImage3 from "../../assets/content-3.jpg";
import contentwritingImage from "../../assets/content-writing.jpg";
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
    FaUserTie, FaUsers, FaRegClock, FaDollarSign
} from 'react-icons/fa';
import { LuCheckCircle } from "react-icons/lu";
import FAQ from "../card/FaqsSection";
import OurCustomersSection from '../card/OurCustomersSection';
import HeroSection from '../card/Hero/HeroSections';
import heroImg from "../../assets/content-development-process-1.webp";

const faqs = [
  {
    question: "Does your content writing service guarantee quality and originality?",
    answer: "Ans : Yes. We ensure all content is 100% original, well-researched, and tailored to meet your specific needs. Our team of skilled writers produces high-quality content that engages your audience and aligns with your business goals.",
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
      Icon: <FaApple size={30} color="#000" />, 
      title: "Custom Content Writing",
    description: "We create tailor-made content that aligns with your unique business goals, ensuring high-quality, engaging, and SEO-optimized articles, blogs, and more.",
    },
    {
      Icon: <FaClipboardCheck size={30} color="#28a745" />,
      title: "Content Strategy",
      description: "Our expert consultants help define your content requirements, identify your target audience, and develop a strategy to maximize engagement and conversions.",
    },
    {
      Icon: <FaPaintBrush size={30} color="#ff5722" />,
      title: "Creative Writing",
    description: "Our skilled writers craft compelling, creative, and visually appealing content that reflects your brand and captivates your audience.",
    },
    {
      Icon: <FaCode size={30} color="#673ab7" />,
      title: "SEO Content Development",
      description: "We focus on creating SEO-friendly content that ranks higher in search engines, driving organic traffic and increasing your online visibility.",
    },
    {
      Icon: <FaBug size={30} color="#dc3545" />, 
      title: "Content Editing and Proofreading",
      description: "Our team ensures your content is error-free, polished, and ready for publication, enhancing readability and audience engagement.",
    },
  ];
  const cardData = [
    "Our expert content writing team creates high-quality, engaging, and SEO-optimized content that drives traffic and boosts online visibility.",
    "We prioritize your target audience, crafting content that resonates with their needs and maximizes engagement.",
    "With a focus on clarity and creativity, we ensure your content communicates your brand message effectively and stands out in the competitive market.",
    "Our team stays up-to-date with the latest content trends and SEO strategies to deliver cutting-edge, impactful content.",
    "From ideation to publication, we collaborate with you to bring your content vision to life, ensuring every piece is aligned with your business goals.",
  ];   

  const cardsData = [
    {
      title: "Expert Writers",
      description:
        "Our seasoned content writing team brings years of expertise in creating high-quality, engaging content that aligns with your goals and enhances brand value.",
      icon: <FaUserTie size={30} color="#007bff" />, // Icon representing expertise
    },
    {
      title: "Audience-Focused Approach",
    description:
      "We prioritize your target audience, crafting content that resonates with their interests and needs, ensuring maximum impact and engagement.",
      icon: <FaUsers size={30} color="#28a745" />, // Icon representing customer focus
    },
    {
      title: "Timely Delivery",
    description:
      "Our agile process allows us to adapt to changing requirements and deliver content on time, ensuring your business stays on track.",
      icon: <FaRegClock size={30} color="#ffc107" />, // Icon representing adaptability and time efficiency
    },
    {
      title: "Affordable Services",
    description:
      "We deliver high-quality content within your budget, optimizing resources while ensuring the best value for your investment.",
      icon: <FaDollarSign size={30} color="#dc3545" />, // Icon representing cost-effectiveness
    },
  ];

const  ContentWritingService = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <Fragment>
      {/* Hero Section */}
      
            <HeroSection
        title="Content Writing Service"
        subtitle="Ambispine Technologies offers professional content writing services to elevate your brand. Engage your audience, improve SEO, and drive results with tailored blogs, articles, and website content designed for success."
        onScrollDown={handleScrollDown}
        heroId="custom-hero"
        backgroundImage={heroImg}
        className="gradient-background" 
      />
      <section className="Content-writing-container next-section">
  <div className="section-grid">
    
<div className="section-image">
    <img
      src={cloudServicesImage}
      alt="Content Writing Services Illustration"
    />
</div>




    {/* Text Section */}
    <div className="section-text">
      <h2>Content Writing Service</h2>
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


      <section className="blog-section">
  <div className="blog-container">
    <div className="blog-img">
      <img src={contentwritingImage} alt="Blog Image" />
    </div>
    <div className="blog-content">
      <div>
        <h3 className='fw-bold'>Blog Building</h3>
        <p> 
        We specialize in SEO strategies that drive real results. Partner with us for a detailed website audit, optimizing keywords, content, and structure to enhance your site's search visibility and attract more traffic when it matters most.
        </p>
      </div>
      <div>
        <h3  className='fw-bold'>Articles and Books</h3>
        <p>
        Ambispine Technologies, we believe SEO is about visibility at the right time. Let us help you optimize your website through a comprehensive audit, focusing on high-impact keywords, content, and structure to ensure your site ranks higher and reaches your target audience effectively.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Our Effective Writing Section */}
<section className="effective-writing-section">
  <div className="content-wrapper">
    <h1 className="fw-bold">An Effective Writing Content</h1>
    <p className="content-description">
    Get SEO-friendly content for your website that is filled with the highest searched keywords of your niche, helping your website rank higher on Google. SEO experts agree that high-quality content not only takes your website to the top of Google but also rewards websites that publish high-quality content frequently and regularly.
    </p>
  </div>
  <div className="img-blure">
    <img src={contentwritingImage3} alt="Blurred Background" />
    <div className="img-blure-content">
      <div className="img-blure-content-content">
        <div className="img-blure-content-card">
          {cardData.map((text, index) => (
            <div
              className="img-blure-cards"
              key={index}
              style={{ marginLeft: `${index * 15}px` }}
            >
              <LuCheckCircle />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="img-blure-cards-right">
          
        </div>
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

export default   ContentWritingService;
