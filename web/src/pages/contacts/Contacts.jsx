import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Feedback from "./Feedbacks";
import contact1 from "../../images/home.jpg";
import "./Contact.css";
import OurTeam from "../about/OurTeamComponent";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
import ContactForm from "./ContactForm";

export default function Contact() {
  const dispatch = useDispatch();
  const {teamMembers}=useSelector((state)=>state.team)
 
  

  useEffect(()=>{
    dispatch(fetchTeamMembers())
  },[dispatch])
 
  
  

  return (
    <div className="contact-1">
<header className="contact-header-1">
  <div className="contact-header-content">
    <h1>Transforming the Future, Together</h1>
    <p>
    Tap into our solutions to empower clients globally to forge a more
            resilient, secure, and sustainable path forward. Contact us for
            better solutions.
    </p>
    <h2>We'd Love to Hear from You</h2>
  </div>
  <div className="contact-header-image">
    <img src={contact1} alt="Contact" className="contact-image" />
  </div>
</header>

      <section className="contact-services">
        <h2>Connect For Services And Support</h2>
        <div className="contact-buttons">
          <a href="#contactus1" className="connect">
            Connect With Us
          </a>

          <button
            onClick={() =>
              document.getElementById("feedback-modal").showModal()
            }
          >
            Feedback
          </button>
          <a
            href="mailto:ambispinetechnologies@gmail.com"
            className="mail-button"
          >
            Mail for queries
          </a>

          <a href="#office" className="office1">
            Offices
          </a>
        </div>
      </section>

      <section id="contactus1">
        <ContactForm/>
      </section>
     
      <div className="team-page">
        {/* <h2 className="com-title">OUR COMPANY</h2> */}
        <h1 className="com-subtitle">Meet Our Team</h1>
        <div className="com-text">
          Even the best technology needs the best people with the right spirit
          behind it. Right across the world, we have a team of dreamers and
          doers just like you, ready to help bring your ideas to life. Here are
          the folks leading the charge.
        </div>
        <div className="com-team">
          {teamMembers.map((member, index) => (
            <OurTeam key={index} {...member} />
          ))}
        </div>
      </div>

      <section className="contact-map" id="office">
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.6658513961215!2d81.3268811!3d24.5662067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398459d048188763%3A0x8300d47552e235d5!2sDISTANCE%20EDUCATION%20DEPARTMENT%20APSU!5e0!3m2!1sen!2sin!4v1729351862454!5m2!1sen!2sin"
      width="100%"
      height="300"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div className="map-info">
    <h2>Our Offices</h2>
    <p>District Rewa, Village Bidawa (M.P.)</p>
    <a
      href="https://www.google.com/maps?ll=24.566207,81.326881&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9439778419335378389"
      target="_blank"
      className="map-link"
      rel="noreferrer"
    >
      Try Google Maps
    </a>
    <a
      href="mailto:ambispinetechnologies@gmail.com"
      className="map-link"
    >
      Mail Us For More Queries
    </a>
  </div>
</section>


      <section className="contact-motto">
        <h2>Embracing innovation today</h2>
        <p>prepares us for the challenges and opportunities of tomorrow!</p>
      </section>

      {/* <dialog id="feedback-modal">
        <Feedback />
      </dialog> */}
      <dialog id="feedback-modal" className="feedback-modal">
  <Feedback
    onClose={() => document.getElementById("feedback-modal").close()}
  />
</dialog>

    </div>
  );
}

