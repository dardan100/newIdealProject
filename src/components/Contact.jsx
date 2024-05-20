import React from "react";
import styles from "./Contact.module.css";
import AppNav from "./AppNav";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <AppNav />

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Have a Project in mind ?</h1>
        </div>
        <div className={styles["form--container"]}>
          <div className={styles["wrapper-contact"]}>
            <div className={styles.title}>
              <h1>
                Contact Us
                <br />
                We're open for any suggestion or just to have a chat
              </h1>
            </div>
            <div>
              <form action="" className={styles.contact}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Enter."
                ></textarea>
              </form>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
