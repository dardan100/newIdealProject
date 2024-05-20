import React from "react";
import { useState } from "react";
import img1 from "../../images/T2.webp";
import img2 from "../../images/sc1.jpeg";
import img3 from "../../images/roadPic2.jpg";
import img4 from "../../images/bridge.webp";

import styles from "./OtherProjects.module.css";
import Footer from "../../components/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

export default function OtherProjects() {
  const [items] = useState([
    { name1: "Kosovo", image1: `${img1}`, des1: "Stacion" },
    { name2: "Germany", image2: `${img2}`, des2: "BadTotz" },
    { name3: "Kosovo", image3: `${img3}`, des3: "Road" },
    { name4: "Pakistan", image3: `${img3}`, des3: "Bridge" },
  ]);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.nextArrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.prevArrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1>Other Projects</h1>
      <div className={styles.container}>
        <Slider {...settings}>
          <div className={styles.slide}>
            <div className={styles.image}>
              <Link to="/project/projectStacion">
                <img src={img1} alt="item1" className={styles.otherImg} />
                <div className={styles.content}>
                  <h1>{items[0].name1}</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.slide}>
            <div className={styles.image}>
              <Link to="/project/projectBadTotz">
                <img src={img2} alt="item2" className={styles.otherImg} />
                <div className={styles.content}>
                  <h1>{items[1].name2}</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.slide}>
            <div className={styles.image}>
              <Link to="/project/projectBridge">
                <img src={img4} alt="item2" className={styles.otherImg} />
                <div className={styles.content}>
                  <h1>{items[3].name4}</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.slide}>
            <div className={styles.image}>
              <Link to="/project/projectRoads">
                <img src={img3} alt="item4" className={styles.otherImg} />
                <div className={styles.content}>
                  <h1>{items[2].name3}</h1>
                </div>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      <Footer />
    </>
  );
}
