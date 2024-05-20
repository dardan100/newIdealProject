import React from "react";
import AppNav from "../../components/AppNav";
import styles from "./ProjectBadTotz.module.css";
import img1 from "../../images/sc1.jpeg";
import img2 from "../../images/sc2.jpeg";
import img3 from "../../images/sc3.jpeg";
import img4 from "../../images/sc4.jpeg";

import BadTotzSlider from "./BadTotzSlider";

export default function ProjectBadTotz() {
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
        <BadTotzSlider slides={slides} />
      </div>
    </div>
  );
}
