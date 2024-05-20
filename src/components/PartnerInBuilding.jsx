import React from "react";
import styles from "./PartnerInBuilding.module.css";

import AppNav from "./AppNav";

export default function PartnerInBuilding() {
  return (
    <>
      <div className={`${styles["bg-image"]}`} id="bg-image">
        <AppNav />
        <p className={styles.text}>Architecture</p>
      </div>
      <div className={styles.container}>
        <div className={styles.con}>
          <h1>Your Partner in Building</h1>
          <p>
            Ideal Project, established in 2004, is a comprehensive civil
            engineering design and architectural services firm dedicated to
            transforming your visions into reality. We combine our extensive
            experience and expertise in civil engineering with a keen eye for
            architectural design to deliver exceptional solutions for your
            projects.
          </p>
          <h1>Our Services:</h1>
          <p>
            <span>Civil Engineering Design</span>: Our team of qualified civil
            engineers provides a wide range of services, including structural
            design, foundation engineering, site planning, and infrastructure
            development. We ensure your project adheres to all relevant codes
            and regulations while meeting your specific needs and budget.
          </p>
          <p>
            <span>Architectural Services:</span> Our architects bring their
            creativity and technical proficiency to create functional and
            aesthetically pleasing spaces. We offer architectural design
            services for various project types, from residential and commercial
            buildings to renovations and historical preservation projects.
          </p>
          <h1>Our Approach:</h1>
          <p>
            <span>At Ideal Project</span>, we believe in a collaborative and
            client-centered approach. We work closely with you throughout the
            entire design process, from initial concept development to final
            construction drawings. We understand the importance of clear
            communication, and we strive to keep you informed and involved at
            every step.
          </p>
          <h1>Our Commitment:</h1>

          <p>We are committed to providing our clients with:</p>
          <p>
            {" "}
            <span>High-quality, innovative designs</span>: We utilize
            cutting-edge technology and best practices to deliver projects that
            are not only functional but also sustainable and aesthetically
            pleasing.
          </p>
          <p>
            <span>Exceptional customer service:</span> We believe in building
            strong relationships with our clients. We are dedicated to
            understanding your unique needs and exceeding your expectations.
          </p>
          <p>
            <span> On-time and on-budget completion:</span> We are committed to
            delivering projects on schedule and within budget.
            <br />
            <span>
              With over 18 years of experience and a dedication to excellence,
              Ideal Project is your trusted partner for all your civil
              engineering design and architectural service needs.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
