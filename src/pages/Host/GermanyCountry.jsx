import React from "react";
import { Link } from "react-router-dom";
import styles from "./GermanyCountry.module.css";
import Footer from "../../components/Footer";
import RootLayout from "../../layouts/RootLayout";

import img1 from "../../images/sc1.jpeg";
import img2 from "../../images/sc2.jpeg";
import img3 from "../../images/infrastructure.webp";

export default function GermanyCountry() {
  return (
    <div>
      <RootLayout />
      <div className={styles.div}>
        <h1>PROJECTS in Germany</h1>
        <div className={styles.container}>
          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link to="/project/projectBadTotz">
                <img src={img1} alt="Northern Winter Sky" />
                <div className={styles.content}>
                  <h1>BadTotz</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link to="/project/projectBadTotz">
                <img src={img2} alt="" />
                <div className={styles.content}>
                  <h1>BadTotz</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage1}`}>
            <div className={styles.image}>
              <Link to="/project/projectInfrastructure">
                <img src={img3} alt="" />
                <div className={styles.content}>
                  <h1>Infrastructure</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
