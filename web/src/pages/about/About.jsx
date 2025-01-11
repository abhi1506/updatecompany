import React, { Fragment, useEffect, useState } from "react";
import "./About.css";
import aboutusImg from "../../assets/about.jpg"
import OurTeam from "./OurTeamComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
import VisionSlider from './VisionSlider'


const AboutMe = () => {
  const dispatch = useDispatch();
  const { teamMembers } = useSelector((state) => state.team);
  const [isExpanded, setIsExpanded] = useState(false);
  const fulltext = 'We are a dynamic community empowering individuals to achieve their goals, expand their network, and discover new opportunities. Through connection, growth, and support, we unlock potential, foster meaningful relationships, and create a ripple effect of success. Join us and transform your life!';

  
  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const truncatedText = fulltext.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <>
      <section>
<header className="main about-header">
  <div className="company-banner-wrapper">
    <div className="main-content">
      <div className="content-text">
        <h1>About Us</h1>
        <p>Get the latest news, updates, and tips</p>
      </div>
    </div>
  </div>
</header>


        <div className="about-page">
          <h1 className="about-title">About Our Company</h1>
          <div className="about-text">
            In a world where technology bridges gaps and brings people closer,
            we stand at the forefront. We specialize in enhancing business
            health through robust IT support and innovative SaaS applications.
            Solutions are designed to connect people, streamline processes, and
            empower companies to reach their full potential. With personalized
            support and cutting-edge technology, we ensure your business runs
            smoothly and efficiently. Connecting People, Empowering Success.
          </div>
          <div className="about-content">
            <div>
              <img
                src={aboutusImg}
                alt="Our Services"
              />
            </div>
            <div className="about-me">
              <h1 className="ms-2" style={{ fontWeight: "bold" }}>
              Connect, grow and succeed with us!
              </h1>
              <p className="about-para"> Empower individual to
                achieve their goals expand their network and find new
                opportunity
              </p>
           
              <p className="about-para">{isExpanded ? fulltext : truncatedText}</p>
              <button onClick={toggleReadMore}> {isExpanded ? 'Read Less' : 'Read More'}</button>
            </div>
          </div>
        </div>
       <div style={{marginTop:"150px"}}>
       <VisionSlider />
       </div>
        <div className="team-page">
         
          <h1 className="com-subtitle">Meet Our Team</h1>
          <div className="com-text">
            Even the best technology needs the best people with the right spirit
            behind it. Right across the world, we have a team of dreamers and
            doers just like you, ready to help bring your ideas to life. Here
            are the folks leading the charge.
          </div>
          <div className="com-team">
            {teamMembers.map((member, index) => (
              <OurTeam key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
