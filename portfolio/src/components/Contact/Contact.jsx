import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        </li>         
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/ghazyurbayani" target="_blank" rel="noopener noreferrer">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          </a>
          <a href="https://www.linkedin.com/in/ghazyurbayani" target="_blank" rel="noopener noreferrer">linkedin.com/ghazyurbayani</a>
        </li>
        <li className={styles.link}>
          
          <a href="https://wa.me/6289523043715" target="_blank" rel="noopener noreferrer">
          <img src={getImageUrl("contact/whatsapp-white-icon.png")} alt="WhatsApp icon" width="48"/>
          </a>
          <a href="https://wa.me/6289523043715" target="_blank" rel="noopener noreferrer">    
          +62 895 2304 3715
          </a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.instagram.com/ghazyachmed" target="_blank" rel="noopener noreferrer">
          <img src={getImageUrl("contact/Instagram.png")} alt="Instagram icon" width="55"/>
          </a>
          <a href="https://www.instagram.com/ghazyachmed" target="_blank" rel="noopener noreferrer">    
          @ghazyachmed
          </a>
        </li>
      </ul>
    </footer>
  );
};
