import React from "react";

import AppNav from "../../components/AppNav";

import styles from "./ProjectJail.module.css";
import JailSlider from "./JailSlider";

export default function ProjectJail() {
  const slides = [
    {
      url: "https://www.motherjones.com/wp-content/uploads/2019/05/20190529_PRISON_B.jpg?w=990",
      title: "beach",
    },
    {
      url: "https://media.istockphoto.com/id/899836048/photo/country-road-and-mountains-with-forest-in-summer.jpg?s=612x612&w=0&k=20&c=BTCLWr0jmCcofAB8tJ13UtjqSsmNsAJP0AnR-N20ruI=",
      title: "boat",
    },
    {
      url: "https://www.motherjones.com/wp-content/uploads/2019/05/20190529_PRISON_B.jpg?w=990",
      title: "forest",
    },
    {
      url: "https://media.istockphoto.com/id/899836048/photo/country-road-and-mountains-with-forest-in-summer.jpg?s=612x612&w=0&k=20&c=BTCLWr0jmCcofAB8tJ13UtjqSsmNsAJP0AnR-N20ruI=",
      title: "city",
    },
    {
      url: "https://www.motherjones.com/wp-content/uploads/2019/05/20190529_PRISON_B.jpg?w=990",
      title: "italy",
    },
  ];

  return (
    <div>
      <div className={styles.containerStyles}>
        <div className={styles.app}>
          <AppNav />
        </div>
        <JailSlider slides={slides} />
      </div>
    </div>
  );
}
