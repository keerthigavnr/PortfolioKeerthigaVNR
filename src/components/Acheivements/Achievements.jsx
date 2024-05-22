import React from "react";
import styles from "./Achievements.module.css";

export const Achievements = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements & Certifications</h2>
      <div className={styles.content}>
        <div className={styles.achievements}>
          <h3 className={styles.subtitle}>Achievements</h3>
          <ul className={styles.list}>
            <li className={styles.item}>AI Lead for Google Developer Students Club at college</li>
            <li className={styles.item}>Senior Member of the ADAS Programming Club</li>
            <li className={styles.item}>Founded a C Programming Community for our class</li>
            <li className={styles.item}>Participant in the Intel OneAPI 3-day Hackathon</li>
          </ul>
        </div>
        
        <div className={styles.certifications}>
          <h3 className={styles.subtitle}>Certifications</h3>
          <ul className={styles.list}>
            <li className={styles.item}>Applied Data Science Capstone Project by IBM - Coursera</li>
            <li className={styles.item}>Machine Learning using Python, IBM - Coursera</li>
            <li className={styles.item}>Network Essentials, Cisco</li>
            <li className={styles.item}>Industrial Training in Data Science, DevTown</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
