import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import styles from "./Pakistan.module.css";
import RootLayout from "../../layouts/RootLayout";

import img from "../../images/bridge.webp";
import img1 from "../../images/bridge3.webp";

export default function PakistanCountry() {
  return (
    <div>
      <RootLayout />
      <div className={styles.div}>
        <h1>PROJECTS in Pakistan</h1>
        <div className={styles.container}>
          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link to="/project/projectBridge">
                <img src={img} alt="Northern Winter Sky" />
                <div className={styles.content}>
                  <h1>Bridge</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link to="/project/projectBridge">
                <img src={img1} alt="Shining Stars " />
                <div className={styles.content}>
                  <h1>Bridge</h1>
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
