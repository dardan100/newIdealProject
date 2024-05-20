import React, { useState } from "react";
import styles from "./RoadsSlider.module.css";
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
        <h1>Title</h1>
        <p>
          The Villa Camélia is a high-end private residence situated in the
          Riviera Golf Beverly Hills neighbourhood, on a plot with a gradient of
          more than 4 metres. To minimise earth movement during excavation,
          Totem positioned the building on a raised “L”-shaped platform,
          extending the garden over the remaining uneven portion of the site.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          cupiditate dolor distinctio praesentium non aliquid optio repellat
          modi deserunt consequuntur.
          <br />
          <br />
          The elevation difference highlights the stunning infinity pool, which
          acts as the focal point of the landscape tableau. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Voluptate consequatur fugit,
          voluptatem explicabo numquam ut voluptatum velit minima. Ipsum dolorem
          veritatis numquam cupiditate iure et?
        </p>

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
