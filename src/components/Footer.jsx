import React from "react";
import { useLocation } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles["footer-content"]}>
            <div className={styles.con}>
              <h3>Contact Us</h3>
              <p>Email:Info@example.com</p>
              <p>Phone:+121 56556 565556</p>
              <p>Address:Sylejman Vokshi | Prishtine</p>
            </div>
          </div>
          <div className={styles["footer-content"]}>
            <h3>Quick Links</h3>
            <ul className={styles.list}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/solution">Solution</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/architecture">Architecture</Link>
              </li>
            </ul>
          </div>
          <div className={styles["footer-content"]}>
            <h3>Follow Us</h3>
            <ul className={styles["social-icons"]}>
              <li>
                <Link href="https://www.instagram.com/">
                  <FaInstagram className={`${styles.icons} footerIcons `} />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/">
                  <FaFacebookF className={`${styles.icons} footerIcons `} />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/feed/">
                  <FaLinkedinIn className={`${styles.icons} footerIcons `} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["bottom-bar"]}>
          <p>
            &copy; 2024 INTERNATIONAL ENGINEERING COMPANY . All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
