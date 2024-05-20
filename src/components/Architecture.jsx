import React from "react";
import styles from "./Architecture.module.css";

export default function Architecture() {
  return (
    <>
      <div className={`${styles["bg-image"]}`} id="bg-image">
        <p className={styles.text}>Architecture</p>
      </div>

      <div className={styles.container}>
        <div className={styles.con}>
          <h1>ARCHITECTURE</h1>
          <p>
            At Ideal Project, we believe your space should be a reflection of
            your unique vision and functional needs. Our team of talented and
            dedicated architects collaborates closely with you to transform your
            ideas into inspiring and functional architectural designs.
          </p>
          <h2> Our comprehensive architectural services encompass:</h2>
          <ul>
            <li>
              Conceptual Design & Programming: We work with you to understand
              your vision, budget, and functional requirements, translating them
              into initial design concepts.
            </li>
            <li>
              Schematic Design & Development: We refine the initial concepts,
              exploring various design options and layouts to create a detailed
              plan that reflects your needs and preferences.
            </li>
            <li>
              Construction Documentation & Permitting: Our meticulous architects
              create comprehensive construction documents, including floor
              plans, elevations, sections, and specifications, ensuring smooth
              construction and adherence to regulations.
            </li>
            <li>
              Project Management & Construction Administration: We guide your
              project through every stage, providing ongoing communication,
              addressing challenges, and ensuring the final outcome aligns with
              your vision.
            </li>
          </ul>

          <h1>
            We specialize in designing a diverse range of projects, including:
          </h1>
          <ul>
            <li>
              Residential buildings (single-family homes, multi-unit dwellings)
            </li>
            <li>Commercial buildings (offices, retail spaces, restaurants)</li>
            <li>Educational institutions (schools, universities)</li>
            <li>Healthcare facilities (hospitals, clinics)</li>
            <li>Public buildings (libraries, museums)</li>
          </ul>
          <h1>Our architectural approach focuses on:</h1>
          <ul>
            <li>
              Creativity & Innovation: We push the boundaries of conventional
              design to create spaces that are both aesthetically pleasing and
              functional.
            </li>
            <li>
              Sustainability: We prioritize eco-friendly design principles to
              minimize environmental impact and create energy-efficient spaces.
            </li>
            <li>
              Collaboration: We work closely with you, engineers, and other
              project stakeholders throughout the design process, ensuring your
              vision is realized.
            </li>
            <li>
              Attention to Detail: We meticulously consider every design
              element, from functionality to aesthetics, to create exceptional
              spaces.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// <div className={styles.main}>
//   <div className={styles.container}>
//     <div className={styles.wrapper}>
//       <h1> ARCHITECTURE</h1>
//       <h2>
//         Ideal Project’s Civil Engineering Expertise: Building the Foundation
//         for Success
//       </h2>
//       <p>
//         At Ideal Project, our dedicated civil engineering team offers a
//         comprehensive range of services to ensure the stability,
//         functionality, and safety of your construction projects, from
//         conception to completion. We understand the intricate details
//         involved in infrastructure development and are committed to
//         exceeding your expectations.
//       </p>

//       <p className={styles.header}>
//         Here’s what sets our civil engineering services apart:
//       </p>

//       <p>
//         <span> Feasibility Studies & Site Assessments</span>: We analyze the
//         feasibility of your project, considering factors like land use,
//         environmental impact, and soil conditions.
//       </p>
//       <p>
//         <span>Detailed Design & Planning</span>: Our engineers meticulously
//         design and plan your project, ensuring it complies with building
//         codes and regulations
//       </p>
//       <p>
//         <span>Infrastructure Development</span>: We manage the design and
//         construction of essential infrastructure elements, including roads,
//         bridges, water systems,
//       </p>
//       <p>
//         <span> Construction Management & Inspection</span>: We oversee the
//         construction process, ensuring adherence to plans, safety protocols,
//         and quality st
//       </p>
//       <p>
//         <span>Sustainable Practices Integration</span>: We incorporate
//         sustainable design principles to minimize environmental impact and
//         ensure long-term project viability.
//       </p>

//       <section className={styles["third--section"]}>
//         <p>
//           Our civil engineering expertise extends to diverse project types,
//           including:
//         </p>
//         <ul>
//           <li>- Residential and commercial buildings</li>
//           <li>- Roads and bridges</li>
//           <li>- Water treatment and distribution systems</li>
//           <li>- Wastewater treatment and collection systems</li>
//           <li>- Land development and site work</li>
//           <li>- Public infrastructure projects</li>
//         </ul>
//       </section>
//       <section className={styles["fourth--section"]}>
//         <p>
//           With Ideal Project’s civil engineering services, you can expect:
//         </p>
//         <ul>
//           <li>
//             - <span>Experienced professionals</span>: Our team boasts
//             extensive experience and expertise in various civil engineering
//             disciplines.
//           </li>
//           <li>
//             -{" "}
//             <span>
//               Collaborative approach: We work closely with you and other
//               project stakeholders to ensure seamless communication and
//               project success.
//             </span>
//           </li>
//           <li>
//             - <span>Commitment to quality</span>: We prioritize the highest
//             quality standards in all aspects of our services.
//           </li>

//           <li>
//             - <span>Sustainable solutions</span>: We are committed to
//             incorporating sustainable practices into our projects.
//           </li>
//         </ul>
//       </section>
//     </div>
//   </div>

/* <section className={styles["section-two"]}>
          <h3>Architecture</h3>
  
          <p>
            At Ideal Project, we believe your space should be a reflection of your
            unique vision and functional needs. Our team of talented and dedicated
            architects collaborates closely with you to transform your ideas into
            inspiring and functional architectural designs.
          </p>
        </section>
        <br />
        <section className={styles["section-two"]}>
          <h3> Our comprehensive architectural services encompass:</h3>
          <ul>
            <li>
              Conceptual Design & Programming: We work with you to understand your
              vision, budget, and functional requirements, translating them into
              initial design concepts.
            </li>
            <li>
              Schematic Design & Development: We refine the initial concepts,
              exploring various design options and layouts to create a detailed
              plan that reflects your needs and preferences.
            </li>
            <li>
              Construction Documentation & Permitting: Our meticulous architects
              create comprehensive construction documents, including floor plans,
              elevations, sections, and specifications, ensuring smooth
              construction and adherence to regulations.
            </li>
            <li>
              Project Management & Construction Administration: We guide your
              project through every stage, providing ongoing communication,
              addressing challenges, and ensuring the final outcome aligns with
              your vision.
            </li>
          </ul>
        </section>
  
        <section className={styles["section-two"]}>
          <h3>
            We specialize in designing a diverse range of projects, including:
          </h3>
          <ul>
            <li>
              Residential buildings (single-family homes, multi-unit dwellings)
            </li>
            <li>Commercial buildings (offices, retail spaces, restaurants)</li>
            <li>Educational institutions (schools, universities)</li>
            <li>Healthcare facilities (hospitals, clinics)</li>
            <li>Public buildings (libraries, museums)</li>
          </ul>
        </section>
        <section className={styles["section-two"]}>
          <h3>Our architectural approach focuses on:</h3>
          <ul>
            <li>
              Creativity & Innovation: We push the boundaries of conventional
              design to create spaces that are both aesthetically pleasing and
              functional.
            </li>
            <li>
              Sustainability: We prioritize eco-friendly design principles to
              minimize environmental impact and create energy-efficient spaces.
            </li>
            <li>
              Collaboration: We work closely with you, engineers, and other
              project stakeholders throughout the design process, ensuring your
              vision is realized.
            </li>
            <li>
              Attention to Detail: We meticulously consider every design element,
              from functionality to aesthetics, to create exceptional spaces.
            </li>
          </ul>
        </section> */
// </div>
