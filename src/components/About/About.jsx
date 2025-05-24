import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.aboutText}>
          <p>
            Hello! I'm V.N.R. Keerthiga, a Computer Science Engineer with experience developing websites and applications. I'm currently working as a Fullstack Developer Intern at Newrta Solutions Private Limited, where I'm gaining hands-on experience with Angular and Spring Boot.
          </p>
          <p>
            My technical expertise includes frontend development with Angular and React, backend development with Spring Boot and Node.js, and database management using PostgreSQL, MySQL, and MongoDB. I'm proficient in cloud services like Microsoft Azure and version control using Git and GitHub.
          </p>
          <p>
            I'm passionate about creating efficient, user-friendly applications and am looking for a full-time position where I can apply my skills and continue growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};
