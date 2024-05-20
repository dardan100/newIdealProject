import React from "react";
// import logo from "../images/newlogo.png";
import logo from "../images/logo500x420.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return <img src={logo} alt="IdealLogo" className={styles.logo} />;
}
