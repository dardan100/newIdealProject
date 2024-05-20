import React from "react";
import styles from "./CivilEngineering.module.css";
import AppNav from "./AppNav";

export default function CivilEngineering() {
  return (
    <>
      <div className={`${styles["bg-image"]}`} id="bg-image">
        <AppNav />
        <p className={styles.text}>CIVIL ENGINEERING SERVICE</p>
      </div>

      <div className={styles.container}>
        <div className={styles.con}>
          <h1>
            Ideal Project’s Civil Engineering Expertise: Building the Foundation
            for Success
          </h1>

          <p>
            At Ideal Project, our dedicated civil engineering team offers a
            comprehensive range of services to ensure the stability,
            functionality, and safety of your construction projects, from
            conception to completion. We understand the intricate details
            involved in infrastructure development and are committed to
            exceeding your expectations.
          </p>

          <h1>Here’s what sets our civil engineering services apart:</h1>
          <p>
            <span> Feasibility Studies & Site Assessments</span>: We analyze the
            feasibility of your project, considering factors like land use,
            environmental impact, and soil conditions.
          </p>
          <p>
            <span>Detailed Design & Planning</span>: Our engineers meticulously
            design and plan your project, ensuring it complies with building
            codes and regulations
          </p>
          <p>
            <span>Infrastructure Development</span>: We manage the design and
            construction of essential infrastructure elements, including roads,
            bridges, water systems,
          </p>
          <p>
            <span> Construction Management & Inspection</span>: We oversee the
            construction process, ensuring adherence to plans, safety protocols,
            and quality st
          </p>
          <p>
            <span>Sustainable Practices Integration</span>: We incorporate
            sustainable design principles to minimize environmental impact and
            ensure long-term project viability.
          </p>
          <h1>
            Our civil engineering expertise extends to diverse project types,
            including:
          </h1>
          <ul>
            <li> Residential and commercial buildings</li>
            <li> Roads and bridges</li>
            <li> Water treatment and distribution systems</li>
            <li> Wastewater treatment and collection systems</li>
            <li> Land development and site work</li>
            <li> Public infrastructure projects</li>
          </ul>
          <h1>
            With Ideal Project’s civil engineering services, you can expect:
          </h1>
          <br />
          <ul>
            <li>
              <span>Experienced professionals</span>: Our team boasts extensive
              experience and expertise in various civil engineering disciplines.
            </li>
            <li>
              <span>
                Collaborative approach: We work closely with you and other
                project stakeholders to ensure seamless communication and
                project success.
              </span>
            </li>
            <li>
              <span>Commitment to quality</span>: We prioritize the highest
              quality standards in all aspects of our services.
            </li>

            <li>
              <span>Sustainable solutions</span>: We are committed to
              incorporating sustainable practices into our projects.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
