import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.experienceCard}>
          <div className={styles.header}>
            <h3 className={styles.role}>Fullstack Developer Intern</h3>
            <p className={styles.company}>Newrta Solutions Private Limited, Madurai</p>
            <p className={styles.duration}>February 2025 - Present</p>
          </div>
          <div className={styles.details}>
            <div className={styles.techStack}>
              <div className={styles.technologies}>
                {["HTML", "CSS", "Bootstrap", "Angular", "Spring Boot", "PostgreSQL"].map((tech, index) => (
                  <span key={index} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
            <ul className={styles.responsibilities}>
              <li>Built responsive Angular modules using Reactive & Dynamic Forms, Bootstrap, and integrated validations for form-heavy UIs.</li>
              <li>Developed and integrated Spring Boot REST APIs for CRUD operations and video uploads, with PostgreSQL, MultipartFile, and FormData handling.</li>
              <li>Used GitHub for version control and Azure DevOps for task/ticket tracking, handled bug fixes via assigned tickets.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 