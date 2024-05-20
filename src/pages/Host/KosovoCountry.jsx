import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import styles from "./KosovoCountry.module.css";
import RootLayout from "../../layouts/RootLayout";
import img1 from "../../images/T2.jpg";
import img2 from "../../images/renderatPic2.jpg";
import img3 from "../../images/roadPic2.jpg";

export default function KosovCountry() {
  return (
    <div>
      <RootLayout />
      <div className={styles.div}>
        <h1>PROJECTS in Kosovo</h1>
        <div className={styles.container}>
          <div className={`${styles.wrapper} ${styles.fourgridcells}`}>
            <div className={styles.image}>
              <Link to="/project/projectStacion">
                <img src={img1} alt="Road" />
                <div className={styles.content}>
                  <h1>Project Stacion</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link to="/project/projectRenderat">
                <img src={img2} alt="Shining Stars " />
                <div className={styles.content}>
                  <h1>Motorway</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.wideimage}`}>
            <div className={styles.image}>
              <Link to="/project/projectRoad">
                <img src={img3} alt="Project Stacion" />
                <div className={styles.content}>
                  <h1 className={styles.spacing}>Road</h1>
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
