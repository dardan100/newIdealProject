import React, { useState } from "react";
import styles from "./InfrastructureSlider.module.css";
import OtherProjects from "./OtherProjects";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function InfrastructureSlider({ slides }) {
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
        <h1>Infrastructure Project Facility </h1>
        <p>
          Infrastructure Project Facility – Technical Assistance 6 (IFP6).
          Contracted to design the Motorway between Kijeve and Zahaq with entire
          length approximately 30 km. Design includes junctions and all
          necessary activities. Construction value of Project more than 180
          Million Euro. Responsible for designing of alignment, junctions,
          overpasses and underpasses, Bridges, hydrology technical specs and
          Bill of Quantities
          <br />
          <br />
          The specific objective of this project was the design of the section
          Kijevë/Klina to Zahaq/Zahać on Road N9 in Kosovo and its operational
          integration into the other sections of Route 6. Company Designed
          several bridges with length more than 120 m of span
          <ul>
            <li>Underpass bridge at 0+225.00 to 0+235.00</li>
            <li>Underpass bridge from 0+525.00 to 0+550.00</li>
            <li>Overpass concrete bridge from station 0+620.00 to 0+640.00</li>
            <li>Bridge above Railway line from station 0+750.00 to 0+775.00</li>
            <li>
              Concrete bridge above Drini river from st. 0+950.00-1+025.00
            </li>
            <li> Concrete overpass bridge from st. 2+425.00-2+445.00</li>
            <li>Concrete overpass bridge from st. 5+375.00-5+395.00</li>
            <li>Underpass bridge from st. 5+680-5+700.00</li>
            <li>Underpass bridge from st. 6+125.00-6+145.00</li>
            <li>Underpass bridge from st. 7+466.61-7+475.00</li>
            <li>Overpass Bridge from st. 9+335.00-9+355.00</li>
            <li>Overpass Bridge from st. 10+350.00-10+370.00</li>
            <li>Overpass Bridge from st. 11+230.00-11+250.00</li>
            <li>Underpass Bridge from st. 11+575.00-11+595.00</li>
            <li>Overpass Bridge from st. 12+625.00-12+645.00</li>
            <li>Overpass Bridge from st. 12+950.00-12+970.00</li>
            <li>Overpass Bridge from st. 15+175.00-15+195.00</li>
            <li>Overpass Bridge from st. 16+950.00-16+970.00</li>
            <li>Overpass Bridge from st. 17+500.00-17+520.00</li>
            <li>Underpass Bridge from st. 18+800.00-18+820.00</li>
            <li>Overpass Bridge from st. 19+225.00-19+245.00</li>
            <li>Overpass Bridge from st. 21+140.00-21+160.00</li>
          </ul>
        </p>

        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <p>Location:</p>
            <h1>Pakistan</h1>
          </div>
          <div className={styles.date}>
            <p>Date</p>
            <h1>2017-2018</h1>
          </div>
        </div>
      </div>

      <div className={styles.moreProject}>
        <OtherProjects />
      </div>
    </div>
  );
}
