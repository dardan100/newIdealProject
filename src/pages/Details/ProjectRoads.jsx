import React from "react";
import RoadsSlider from "./RoadsSlider";
import AppNav from "../../components/AppNav";

import styles from "./ProjectRoads.module.css";
import img1 from "../../images/roadPic2.jpg";

export default function Roads() {
  const slides = [
    {
      url: img1,
      title: "beach",
    },
  ];

  return (
    <div>
      <div className={styles.containerStyles}>
        <div className={styles.app}>
          <AppNav />
        </div>
        <RoadsSlider slides={slides} />
      </div>
    </div>
  );
}
