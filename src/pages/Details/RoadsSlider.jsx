import React, { useState } from "react";
import styles from "./RoadsSlider.module.css";
import OtherProjects from "./OtherProjects";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
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
        {/* <div onClick={goToPrevious} className={styles.leftArrowStyles}>
          ❰
        </div> */}
        {/* <div onClick={goToNext} className={styles.rightArrowStyles}>
          ❱
        </div> */}
      </div>
      <div style={slideStylesWidthBackground}></div>

      <div className={styles.details}>
        <h1>Title</h1>
        <p>
          The EU office in Kosovo has signed a contract with Consulting Firm
          EPEM from Greece to provide designing services for an infrastructure
          project through EU IPA Programme for North Mitrovica. The projects aim
          was developing of project design and ternder documents for closing of
          existing landfill “Ballaban” and designing a new one at location
          called Savina Stena.
          <br />
          <br />
          Ideal Project was contracted to perform inspection of construction for
          the landfill project in Zvecan Activities were as following: -Site
          visiting upon request to verify the work progress and quality of
          services -Inspection of work performed -BoQ controlling Etc The
          project is part of the IPA pre-accession program of the European
          Commission and in line with the strategy for environmental protection,
          enshrined in the National Development Plan of Kosovo. The project has
          an area of 26,6 hectares, and Cell A occupies 3 hectares. The facility
          has a life of 20 years (including Cell B). The Landfill will be used
          by the municipalities of Leposavic, Mitrovica North, Zvecan and Zubin
          Potok, with an estimated population of 60 000 people.
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
