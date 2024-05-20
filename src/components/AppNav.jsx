import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./AppNav.module.css";

export default function AppNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.burgerMenu}`) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          <Logo />
        </NavLink>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <div className={isOpen ? styles.barChange : styles.bar} />
          <div className={isOpen ? styles.barChange : styles.bar} />
          <div className={isOpen ? styles.barChange : styles.bar} />
        </div>
        <nav className={`${styles.navbar} ${isOpen ? styles.show : ""}`}>
          <NavLink to="/project" onClick={toggleMenu}>
            Our Project
          </NavLink>
          <NavLink to="/solution" onClick={toggleMenu}>
            Solution
          </NavLink>
          <NavLink to="/architecture" onClick={toggleMenu}>
            Architecture
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
