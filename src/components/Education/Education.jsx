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
          <p>CGPA: 8.2</p>
          <p>2021 - Present (Batch 2025)</p>
        </div>
        <div className={styles.card}>
          <h3>Sitalakshmi Girls Higher Secondary School, Tamil Nadu</h3>
          <p>XII (Higher Secondary Education)</p>
          <p>Percentage: 93.4%</p>
          <p>2020 - 2021</p>
        </div>
        <div className={styles.card}>
          <h3>Sitalakshmi Girls Higher Secondary School, Tamil Nadu</h3>
          <p>Secondary Education</p>
          <p>Percentage: 94.4%</p>
          <p>2018 - 2019</p>
        </div>
      </div>
    </section>
  );
};
