import React, { useState } from "react";
import styles from "./RenderSlider.module.css";
import OtherProjects from "./OtherProjects";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "top",
};

export default function RoadsSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className={styles.sliderStyles}>
      <div>
        <div onClick={goToPrevious} className={styles.leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} className={styles.rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>

      <div className={styles.details}>
        <h1>Motorway</h1>
        <p>
          The aim of the project is construction of 2 lane motorway between
          Klina and Peja Municipality. The length of the Motorway was 26 km.
          Main details The road between Klina and Peja is two lane road with
          width 7 m. Since the Ministry had in plan to do road widening Ideal
          project was contracted to do this design. The length of the new
          designed Motorway is 26 km and is 28 m wide. In both sides have two
          lanes
        </p>

        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <p>Location:</p>
            <h1>Kosovo</h1>
          </div>
          <div className={styles.date}>
            <p>Date:</p>
            <h1>2019-2021</h1>
          </div>
          <div className={styles.date}>
            <p>Price:</p>
            <h1>Over 5.5 Mil.Euro</h1>
          </div>
        </div>
      </div>

      <div className={styles.moreProject}>
        <OtherProjects />
      </div>
    </div>
  );
}
