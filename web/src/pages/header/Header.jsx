import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/AmbiSpine_logo.png";
import { AiFillAndroid } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { DiDigitalOcean } from "react-icons/di";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCloudUpload } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "./Header.css";

import "./mobile.css";

const Header = ({ isScrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const mobileMenuRef = useRef(null);

  const handleMobileView = () => {
    setMobileView(!mobileView);
  };

  const closeMobileView = () => {
    setMobileView(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileView();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const servicesdrop = [
    {
      id: 1,
      icon: <AiFillAndroid />,
      name: "Mobile App Development",
      feature: [
        { name: "IOS App Development" },
        { name: "Android App Development" },
        { name: "Hybrid App Development" },
      ],
    },
    {
      id: 2,
      icon: <CgWebsite />,
      name: "Website Development",
      feature: [
        { name: "Website App Development" },
        { name: "Responsive web designing" },
        { name: "Content Management System" },
        { name: "Software Development Services" },
      ],
    },
    {
      id: 3,
      icon: <FaBusinessTime />,
      name: "Business Solution",
      feature: [
        { name: "CRM Business Solution" },
        { name: "ERP Business Solution" },
      ],
    },
    {
      id: 5,
      icon: <IoIosCloudUpload />,
      name: "Cloud Solution",
      feature: [{ name: "Cloud Solution and Data Migration" }],
    },
    {
      id: 6,
      icon: <DiDigitalOcean />,
      name: "Digital Marketing Services",
      feature: [
        { name: "SEO Service" },
        { name: "Content Writing Service" },
      ],
    },
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="header__logos">
          <img src={logo} alt="AmbiSpine Logo" className="header__logos-img" />
        </Link>
        <nav className={`nav-menu ${mobileView ? "showMobileHeader" : ""} `}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link className="nav-link with-arrow">
              Services
              <span
                className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              >
                ▼
              </span>
            </Link>
            <div
              style={{ background: "#fff" }}
              className={`dropdown-mega ${isDropdownOpen ? "show" : ""}`}
            >
              <div className="dropdown-grid">
                {servicesdrop.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="service-card-drop"
                  >
                    {/* <span className="service-icon">{service.icon}</span> */}
                    <div className="service-content">
                      <h3 className="service-title">{service.name}</h3>
                      <hr />
                      <div className="feature-tags">
                        {service.feature.map((feature, idx) => (
                          <Link
                            key={idx}
                            to={`/services/${feature.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="feature-tag"
                          >
                            {feature.name}{" "}
                            <FaArrowRightLong className="service_header_arrow" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <Link to="/service" className="nav-link">
            Services
          </Link> */}
          <Link to="/product" className="nav-link">
            Product
          </Link>
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
          <Link to="/career" className="nav-link">
            Career
          </Link>
          <Link
            to="/contact"
            className="contact-btn"
            style={{ textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </nav>

        <IoReorderThreeOutline
          onClick={handleMobileView}
          className="mobile-toggle "
        />
       {mobileView && (
   <div
   ref={mobileMenuRef}
   data-aos="fade-left"
   className="mobile-view-section"
 >
    <div className="d-flex justify-content-between align-items-center">
      <Link to="/" className="header__logos">
        <img
          src={logo}
          alt="AmbiSpine Logo"
          className="header__logos-img"
        />
      </Link>
      <RxCross2 className="cross-icon" onClick={handleMobileView} />
    </div>
    <nav>
      <Link to="/" className="mobile-view-link">
        Home
      </Link>
      <div className="services-section">
        <div className="mobile-view-link">Services</div>
        {servicesdrop.map((service) => (
          <div key={service.id} className="service-item">
            <div
              className="service-header"
              onClick={() => toggleService(service.id)}
            >
              {service.icon} {service.name}
              <FaArrowRightLong
                className={`service-arrow ${
                  expandedService === service.id ? "rotated" : ""
                }`}
              />
            </div>
            {expandedService === service.id && (
              <div className="service-features-mobile-view">
                {service.feature.map((feature, idx) => (
                  <Link
                    key={idx}
                    to={`/services/${feature.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="feature-tag-mobile-view"
                  >
                    {feature.name}
                    <FaArrowRightLong className="feature-tag-icon" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Link to="/product" className="mobile-view-link">
        Product
      </Link>
      <Link to="/aboutus" className="mobile-view-link">
        About Us
      </Link>
      <Link to="/career" className="mobile-view-link">
        Career
      </Link>
      <Link to="/contact" className="mobile-view-link">
        Contact
      </Link>
    </nav>
  </div>
)}

      </div>
    </header>
  );
};

export default Header;
