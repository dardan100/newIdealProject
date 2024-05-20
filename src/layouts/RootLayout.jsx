import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";

import Logo from "../components/Logo";

export default function RootLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "rgb(252, 190, 8)",
  };

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    <>
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

      <div className={styles.links}>
        <NavLink className={styles.link} to="/project">
          All
        </NavLink>
        <NavLink
          className={styles.link}
          to="/kosovo"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Kosovo
        </NavLink>
        <NavLink
          className={styles.link}
          to="/germany"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Germany
        </NavLink>
        <NavLink
          className={styles.link}
          to="/pakistan"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Pakistan
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
