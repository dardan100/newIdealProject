import React from "react";
import AppNav from "../../components/AppNav";
import img1 from "../../images/T1.webp";
import img2 from "../../images/T2.webp";
import img3 from "../../images/T3.webp";
import img4 from "../../images/T4.webp";

import StacionSlider from "./StacionSlider";
import styles from "./ProjectStacion.module.css";

export default function ProjectJail() {
  const slides = [
    {
      url: `${img1}`,
      title: "image 1",
    },
    {
      url: `${img2}`,
      title: "image 2",
    },
    {
      url: `${img3}`,
      title: "image 3",
    },
    {
      url: `${img4}`,
      title: "image 4",
    },
  ];

  return (
    <div>
      <div className={styles.containerStyles}>
        <div className={styles.app}>
          <AppNav />
        </div>
        <StacionSlider slides={slides} />
      </div>
    </div>
  );
}
