import React, { Fragment, useState } from "react";
import style from "./ProductSpreads.module.css";
import ambVideo from "../../images/ambVideo.mp4";
import Video1 from "../../images/video1.mp4";
import cloudata1 from "../../images/cloudata1.jpg";
import produc1 from "../../assets/product1.jpg";
import produc2 from "../../assets/product2.png";
import produc3 from "../../assets/product3.jpg";
import produc4 from "../../assets/product4.jpg";
import setoohashi5 from "../../assets/setoohashi5.jpg";
import satelight from "../../assets/satelight.jpg";

const ProductSpreads = () => {
  const [data, setData] = useState([
    {
      id: 1,
      imgSrc: produc1,
      title: "Unify access to all of your data",
      description:
        "Accelerate time to value with self-service access to NVIDIA AI microservices and other essential AI tools to simplify accelerated infrastructure configuration.",
    },
    {
      id: 2,
      imgSrc: produc2,
      title: "Dynamic Job Portal",
      description:
        "Empower professionals and businesses with a seamless job-search experience.",
    },
    {
      id: 3,
      imgSrc: produc3,
      title: "Community Building",
      description:
        "Foster meaningful connections with like-minded professionals.",
    },
    {
      id: 4,
      imgSrc: produc4,
      title: "Social Integration",
      description:
        "Combine social media features with professional tools for an enhanced experience.",
    },
  ]);

  const toggleDescription = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
      )
    );
  };

  return (
    <Fragment>
      <div className={style.videoHero}>
        <video autoPlay loop muted className={style.videoBackground}>
          <source src={ambVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={style.videoContent}>
          <h1>Where Opportunity Meets Community</h1>
          <p>
            We are excited to announce the upcoming launch of Topics Spreads, a
            groundbreaking platform that seamlessly integrates social media with a
            dynamic job portal.
          </p>
        </div>
      </div>

      <section className={style.videoSection}>
        <h2 className={style.sectionTitle}>New Things Coming Soon</h2>
        <div className={style.videoCard}>
          <video
            src={Video1}
            autoPlay
            loop
            muted
            className={style.videoPlayer}
          />
        </div>
      </section>

      <section className={style.maxWrapper}>
        <h2>Spreads Use Cases</h2>
        <p>
          In the very near future, we’ll be launching in India, offering dynamic
          solutions to connect professionals and communities.
        </p>
        <div className={style.cardWrapper}>
          {data.map((item) => (
            <div className={style.spreadsCard} key={item.id}>
              <div className={style.spreadsCardImage}>
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className={style.spreadsCardContent}>
                <h3>{item.title}</h3>
                <p>
                  {item.isExpanded
                    ? item.description
                    : `${item.description.slice(0, 100)}...`}
                </p>
                <span
                  className={style.toggleReadMore}
                  onClick={() => toggleDescription(item.id)}
                >
                  {item.isExpanded ? "Read Less" : "Read More"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={style.logoSection}>
        <div className={style.logoCard}>
          <div className={style.logoContent}>
            <h2>Spreads Use Cases</h2>
            <p>
              We are excited to announce the upcoming launch of Topics Spreads, a
              groundbreaking platform that seamlessly integrates social media with a
              dynamic job portal.
            </p>
          </div>
          <div className={style.logoImg}>
            <img src="logo.png" alt="Logo" />
          </div>
        </div>
      </section>

      <section className={style.dreamsContainer}>
  <div className={style.dreamsBetween}>
    <div className={style.dreamsCrd}>
      <div className={style.cardOne}>
        <img src={cloudata1} alt="Card Image 1" />
      </div>
      <div className={style.cardOne}>
        <img src={satelight} alt="Card Image 2" />
      </div>
      <div className={style.cardOne}>
        <img src={setoohashi5} alt="Card Image 3" />
      </div>
    </div>
    <div className={style.dreamsContent}>
      <p>
        We can achieve anything with our commitment, hard work, and enthusiasm.
        But we have to build strong alliances.
      </p>
      <h1>DREAMS</h1>
    </div>
  </div>
</section>

    </Fragment>
  );
};

export default ProductSpreads;
