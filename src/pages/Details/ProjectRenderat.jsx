import React from "react";
import AppNav from "../../components/AppNav";
import styles from "./ProjectRenderat.module.css";

import img1 from "../../images/renderatPic1.webp";
import img2 from "../../images/renderatPic2.jpg";
import img3 from "../../images/renderatPic3.jpg";
import img4 from "../../images/renderatPic4.jpg";

import RenderSlider from "./RenderSlider";

export default function ProjectBridge() {
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
        <RenderSlider slides={slides} />
      </div>
    </div>
  );
}
