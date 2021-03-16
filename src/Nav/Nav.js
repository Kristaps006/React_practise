import React from "react";
import styles from "./Nav.module.css";

const nav = (props) => {
  const navList = ["Home", "About", "Experience", "Contact"];

  return (
    <div className={styles.Nav}>
      <ul className={styles.list}>
        {navList.map((nav) => {
          return (
            <li>
              <a className={styles.Link} href="#">
                {nav}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default nav;
