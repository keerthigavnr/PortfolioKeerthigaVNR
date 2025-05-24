import React from "react";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <div className={styles.card}>
          <h3>Anna University Regional Campus, Madurai</h3>
          <p>B.E. in Computer Science and Engineering</p>
          <p>CGPA: 8.1</p>
          <p>2022 - 2025</p>
        </div>
        <div className={styles.card}>
          <h3>Sitalakshmi Girls Higher Secondary School, Madurai</h3>
          <p>HSC (Higher Secondary Education)</p>
          <p>Percentage: 93.3%</p>
          <p>2019 - 2022</p>
        </div>
        <div className={styles.card}>
          <h3>Sitalakshmi Girls Higher Secondary School, Madurai</h3>
          <p>SSLC (Secondary Education)</p>
          <p>Percentage: 94.4%</p>
          <p>2018 - 2019</p>
        </div>
      </div>
    </section>
  );
};
