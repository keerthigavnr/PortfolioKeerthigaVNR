import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactSection}>
        <div className={styles.text}>
          <h2>Contact Me</h2>
          <p>Let's Connect!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:keerthigavnr@gmail.com">keerthigavnr@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/vnrkeerthiga/">linkedin.com/in/vnrkeerthiga</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/keerthigavnr">github.com/keerthigavnr</a>
          </li>
          {/* <li className={styles.link}>
            <img src={getImageUrl("contact/phone_icon.png")} alt="Phone icon" />
            <a href="tel:+918056881866">(+91) 805-688-1866</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/location_icon.jpg")} alt="Location icon" />
            <span>Tamil Nadu, India</span>
          </li> */}
        </ul>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2024 Keerthiga V N R. All rights reserved.</p>
      </div>
    </footer>
  );
};
