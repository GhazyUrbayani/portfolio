import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ghazy</h1>
        <p className={styles.description}>
        Information Systems and Technology Student at Institut Teknologi Bandung
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ghazyurbayani@gmail.com&su=Subject&body=YourMessage" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
