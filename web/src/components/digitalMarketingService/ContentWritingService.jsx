import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa"; 
import "./ContentWritting.css";
import FAQ from "../card/FaqsSection";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { submitcontentMessage } from "../../redux/slices/contentSlice";
import HeroSection from "../card/Hero/HeroSections";
import heroImg from "../../assets/content-development-process-1.webp"
const faq=[
    {
      question: "What types of content writing services do you offer?",
      answer: "We provide a wide range of services including blog writing, SEO content, eBooks, whitepapers, and more tailored to your needs.",
    },
    {
      question: "How do you ensure the quality of content?",
      answer: "Our expert writers follow a rigorous process of research, drafting, and editing to deliver high-quality, error-free content.",
    },
    {
      question: "Can I request revisions?",
      answer: "Yes, we offer revisions to ensure the content meets your expectations and aligns with your vision.",
    },
    {
      question: "How long does it take to deliver content?",
      answer: "Delivery time depends on the project scope, but we always strive to meet deadlines without compromising quality.",
    },
    {
      question: "Are your services SEO-friendly?",
      answer: "Absolutely! Our team specializes in creating content optimized for search engines to boost your online visibility.",
    },
  ]
const data1=[
    {
      icon: "pen-nib",
      title: "Blog Writing",
      text: "Engaging blogs tailored to capture your audience’s attention and keep them coming back for more.",
    },
    {
      icon: "file-alt",
      title: "SEO Content",
      text: "Optimized articles that rank higher on search engines, driving traffic to your website.",
    },
    {
      icon: "book-open",
      title: "eBooks & Whitepapers",
      text: "Comprehensive content designed to educate and establish your authority in the industry.",
    },
  ]
  const data=[
    {
      icon: "check-circle",
      title: "Expert Writers",
      text: "Our team comprises industry-expert writers who craft impactful, well-researched, and engaging content tailored to your needs.",
    },
    {
      icon: "chart-line",
      title: "Proven Results",
      text: "We deliver content that drives measurable outcomes, from increased traffic to improved conversions.",
    },
    {
      icon: "thumbs-up",
      title: "Customer Satisfaction",
      text: "Our clients are our top priority. We ensure every piece of content exceeds your expectations.",
    },
    {
      icon: "clock",
      title: "Timely Delivery",
      text: "We understand deadlines. Our streamlined process ensures your content is delivered on time, every time.",
    },
    {
      icon: "lightbulb",
      title: "Creative Solutions",
      text: "We bring fresh ideas and innovative approaches to ensure your content stands out in a crowded market.",
    },
    {
      icon: "lock",
      title: "Confidentiality",
      text: "Your projects are safe with us. We maintain strict confidentiality and safeguard your intellectual property.",
    },
  ]
  
const ContentWriting = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".bg-light");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

 const validate = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = "Name is required";
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
    newErrors.email = "Please enter a valid email address";
  if (!formData.message) newErrors.message = "Message is required";
  return newErrors;
};


 const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    setIsSubmitting(true);
    dispatch(submitcontentMessage(formData))
      .then(() => {
        toast.success("Content submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Failed to submit content. Please try again.");
      })
      .finally(() => setIsSubmitting(false));
  }
};


  
  return (
    <>
      
<HeroSection
        title="Professional Content Writing Services"
        subtitle=" Transform your ideas into impactful content with our expert writers. From
      blogs to SEO-friendly articles, we deliver content that resonates."
      onScrollDown={handleScrollDown}
      heroId="custom-hero"
      backgroundImage={heroImg}
      className="gradient-background" 
      />   
      <section className="content-writing-services my-5 py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4 -writing-section-title">
      Professional Content Writing Services
    </h2>
    <p className="text-center lead mb-5 -writing-section-description">
      Transform your ideas into impactful content with our expert writers.
      From blogs to SEO-friendly articles, we deliver content that
      resonates.
    </p>
    <div className="row">
      {data1.map((service, index) => (
        <div className="col-md-4 text-center mb-4" key={index}>
          <div className="-writing-service-card shadow-lg p-4 bg-white rounded-3">
            <div className="service-writing-icon mb-3">
              <i className={`fas fa-${service.icon} fa-3x text-primary`}></i>
            </div>
            <h5 className="service-writing-title font-weight-bold mb-3">
              {service.title}
            </h5>
            <p className="service-writing-description">{service.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
      <section className="why-choose-ambiSpine my-5 py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4 section-heading">
      Why Choose AmbiSpine Technologies?
    </h2>
    <p className="text-center lead mb-5 section-subheading">
      Discover what sets us apart and why businesses trust us for their
      content needs.
    </p>
    <div className="row">
      {data.map((feature, index) => (
        <div className="col-md-4 text-center mb-4" key={index}>
          <div className="feature-c-card p-4 bg-white rounded shadow-lg">
            <div className="feature-c-icon mb-3">
              <i
                className={`fas fa-${feature.icon} fa-3x text-primary`}
              ></i>
            </div>
            <h5 className="feature-c-title font-weight-bold mb-3">
              {feature.title}
            </h5>
            <p className="feature-c-text">{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
     
      <section className="contact-us my-5 py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center lead mb-5">
            Have questions or want to discuss your project? Reach out to us today
            and we'll get back to you as soon as possible.
          </p>
         <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-md-6 mb-3">
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={formData.name}
        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
        placeholder="Your Name"
        required
      />
      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
    </div>
    <div className="col-md-6 mb-3">
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        className="form-control"
        placeholder="Your Email"
        required
      />
    </div>
    <div className="col-md-12 mb-3">
      <textarea
        className="form-control"
        placeholder="Your Message"
        rows="5"
        name="message"
        value={formData.message}
        onChange={handleChange}
        onFocus={() => handleFocus("message")}
        required
      ></textarea>
    </div>
    <div className="col-md-12 text-center">
      <button type="submit" className="btn btn-primary btn-lg">
        Send Message
      </button>
    </div>
  </div>
</form>

        </div>
      </section>

<FAQ faqs={faq} />
    </>
  );
};

export default ContentWriting;
