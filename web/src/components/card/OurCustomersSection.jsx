import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import cloudServicesImage from "../../assets/resize.jpg";
import styles from './OurCustomersSection.module.css';  
import QuotationForm from '../form/QuotationForm';

const OurCustomersSection = () => {
  const [consultActive, setConsultActive] = useState(false);

  const handleConsult = () => {
    setConsultActive(true);
  };

  useEffect(() => {
    if (consultActive) {
      document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
    }
  }, [consultActive]);

  return (
    <>
      {/* Main Section */}
      <section className={styles.mncCustomersSection}>
        <div className={styles.mncCustomersContent}>
          {/* Text Content */}
          <div className={styles.mncTextContent}>
            <h1 className={styles.mncTitle}>
              Bringing the Best Solutions to Our Valued Customers
            </h1>
            <p className={styles.mncDescription}>
              At the core of our work is a dedication to your success. Our IT services are designed to exceed expectations, empowering your business with innovative solutions that drive remarkable results in today’s competitive technology landscape.
            </p>
            <button className={styles.mncButton} onClick={handleConsult}>
              Consult Now <FaArrowRight />
            </button>
          </div>
          {/* Image Content */}
          <div className={styles.mncImageWrapper}>
            <img
              src={cloudServicesImage}
              alt="Cloud Services"
              className={styles.mncImage}
            />
          </div>
        </div>
      </section>

      {consultActive && (
        <section id="scroll" className={styles.quotationFormSection}>
          <div className={styles.formContainer}>
            <QuotationForm />
          </div>
        </section>
      )}
    </>
  );
};

export default OurCustomersSection;
