import React from "react";
import AppNav from "../../components/AppNav";

import styles from "./ProjectInfrastructure.module.css";
import img from "../../images/infrastructure.webp";
import InfrastructureSlider from "./InfrastructureSlider";

export default function ProjectBridge() {
  const slides = [
    {
      url: `${img}`,
      title: "image 1",
    },
  ];

  return (
    <div>
      <div className={styles.containerStyles}>
        <div className={styles.app}>
          <AppNav />
        </div>
        <InfrastructureSlider slides={slides} />
      </div>
    </div>
  );
}
