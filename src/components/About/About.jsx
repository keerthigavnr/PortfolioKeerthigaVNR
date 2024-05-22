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
            Hello! I'm V.N.R. Keerthiga, a passionate MERN stack developer currently pursuing a B.E. in Computer Science and Engineering at Anna University. I have a strong foundation in web development and a keen interest in data analysis, machine learning, and AI.
          </p>
          <p>
          In addition to my technical skills, I have actively participated in hackathons, where I enjoyed tackling complex problems and coming up with innovative solutions. I was also the AI lead in the Google Students Developer Club at my university and a member of our college's programming club.   </p>
          <p>

            Looking forward, I aspire to create innovative solutions and contribute to projects. I'm always eager to learn new technologies and collaborate with like-minded individuals.
          </p>
        </div>
      </div>
    </section>
  );
};
