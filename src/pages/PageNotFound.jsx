import React from "react";
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className={styles.page}>
      <h1>
        404 error
        <br />
        <h1>Page not found 😢</h1>
        <Link to=".">Go Back</Link>
      </h1>
    </div>
  );
}
