import React from "react";
import styles from "./Nav.module.css";

const nav = () => {
  const navItems = ["Home", "About", "Experience", "Contact"];

  return (
    <div className={styles.Nav}>
      <ul className={styles.list}>
        {navItems.map((nav, id) => {
          return (
            <li key={id}>
              <a href="#">{nav}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default nav;
