import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Marketing icon" />
            <div className={styles.aboutItemText}>
              <h3>Digital Marketing</h3>
              <p> </p>
              <p>
              I am certified and have experience in Start Up Corporation
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Relation icon" />
            <div className={styles.aboutItemText}>
              <h3>Public Relation</h3>
              <p> </p>
              <p>
              Experienced in various organisations/communities 
              <p> 
              and certified with several classes & courses
              </p>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Web icon" />
            <div className={styles.aboutItemText}>
              <h3>Junior Web Developer</h3>
              <p> </p>
              <p>
              I'm continuing to learn and implement into projects
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
