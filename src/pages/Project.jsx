/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./Project.module.css";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import img1 from "../images/T1.webp";
import img2 from "../images/roadPic2.jpg";
import img3 from "../images/infrastructure.webp";
import img4 from "../images/bridge.webp";
import img5 from "../images/sc2.jpeg";
import img6 from "../images/renderatPic1.webp";

export default function Project() {
  return (
    <div>
      <RootLayout />

      <div className={styles.div}>
        <h1>PROJECTS</h1>
        <div className={styles.container}>
          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link to="projectRoads">
                <img src={img2} alt="Northern Winter Sky Image" />
                <div className={styles.content}>
                  <h1>Road</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link to="projectStacion">
                <img src={img1} alt="Stacion at Sveqan" />
                <div className={styles.content}>
                  <h1>Stacion at Sveqan</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link to="projectInfrastructure">
                <img src={img3} alt="Infrastucture" />
                <div className={styles.content}>
                  <h1>Infrastructure</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link to="projectBridge">
                <img src={img4} alt="Pakistan Bridge" />
                <div className={styles.content}>
                  <h1>Pakistan Bridge</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimageTotz}`}>
            <div className={styles.image}>
              <Link to="projectBadTotz">
                <img src={img5} alt="" />
                <div className={styles.content}>
                  <h1>Project Bad Totz</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link to="projectRenderat">
                <img src={img6} alt="Motorway" />
                <div className={styles.content}>
                  <h1>Motorway</h1>
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
