import React, { useState } from "react";
import styles from "./BadTotzSlider.module.css";
import OtherProjects from "./OtherProjects";
import { Link } from "react-router-dom";

const slideStyles = {
  width: "100%",
  height: "90%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

export default function BadTotzSlider({ slides }) {
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
        <h1>Bemerkungen</h1>
        <p>
          Bemerkungen Alle Angaben sind Rohbaumaße. Sie sind vom Unternehmer
          gemäß VOB zu prüfen. Sichtbare Kanten und bleibende Fugen sind, wenn
          nicht anders angegeben, mit Dreikantleisten herzustellen.
          Schalungsflächen nach Angabe der Bauleitung. Vor dem Betonieren ist
          die Lage aller Durchbrüche und sanitären Einbauteile vom Haustechniker
          zu prüfen. Die Nachbehandlung des Frischbetons hat nach der Richtlinie
          des Deutschen Ausschusses für Stahlbeton zu erfolgen. Alle Betonteile
          sind intensiv nachzubehandeln. Zur Vermeidung von Schwindrissen sind
          bauseits entsprechende Massnahmen zu treffen ! (z.B.
          Abbindeverzögerer, Schwind-& Arbeitsabschnitte, evtl. mit
          entprechenden Arbeitsfugenbändern, chwindarmer Zement,Nachbehandlung
          etc.)Der Beton ist bis zum Erhärten vor Witterungseinflüssen zu
          schützen Es ist ein Beton mit niedriger Hydratationswärme und geringem
          Schwindverhalten zu verwenden. Erforderliche Arbeitsfugen in den
          vertikalen Bauteilen sind nach DIN EN 1992-1+NA und Heft 400 rau und
          Arbeitsfugen in den Decken und Bodenplatten verzahnt auszubilden. (d.h
          das Korngerüst ist entsprechend freizulegen) Alle Maße sind auf der
          Baustelle verantwortlich zu prüfen. Unstimmigkeiten sind dem
          Planverfasser bzw. der Bauleitung unverzüglich mitzuteilen. Mit der
          Ausführung der Arbeiten übernimmt die ausführende Firma hierfür die
          Haftung und Gewährleistung in vollem Umfang.Zusätzlich zum Plan sind
          alle Ausführungen der Statik zu beachten! Alle nachträglich
          anzubringenden Dämmungen und Fassadenverkleidungen
          <br />
          <br />
        </p>

        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <p>Location:</p>
            <Link
              to="https://www.google.com/maps/place/83646+Bad+T%C3%B6lz,+Germany/@47.7614974,11.5649713,11.96z/data=!4m15!1m8!3m7!1s0x479d94490fd26e55:0x5f031a0b2eb1fdc0!2s83646+Bad+T%C3%B6lz,+Germany!3b1!8m2!3d47.7619244!4d11.5661182!16zL20vMDVncnFy!3m5!1s0x479d94490fd26e55:0x5f031a0b2eb1fdc0!8m2!3d47.7619244!4d11.5661182!16zL20vMDVncnFy?entry=ttu"
              target="_blank"
            >
              <h1>BadTolz - Geramny</h1>
            </Link>
          </div>
          <div className={styles.date}>
            <p>Date</p>
            <h1>04.09.2023</h1>
          </div>
          <div className={styles.date}>
            <p>Builder</p>
            <h1>
              Shpejtim und Ajete Haxhija Tölzer Elektromotoren -
              Elektromaschinenbau Im Farchet 4 83646 Bad Tölz
            </h1>
          </div>
        </div>
      </div>

      <div className={styles.moreProject}>
        <OtherProjects />
      </div>
    </div>
  );
}
