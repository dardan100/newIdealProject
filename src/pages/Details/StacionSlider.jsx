import React, { useState } from "react";
import styles from "./StacionSlider.module.css";
import OtherProjects from "./OtherProjects";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

export default function JailSlider({ slides }) {
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
        <h1>Project Stacion</h1>

        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <p>Location:</p>
            <h1>Kosovo</h1>
          </div>
          <div className={styles.date}>
            <p>Date</p>
            <h1>2024</h1>
          </div>
        </div>
      </div>

      <div className={styles.moreProject}>
        <OtherProjects />
      </div>
    </div>
  );
}
