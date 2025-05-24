import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id='/'>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm V.N.R. Keerthiga</h1>
        <p className={styles.description}>
          I'm a Computer Science Engineer with experience in full-stack development, currently working as a Fullstack Developer Intern at Newrta Solutions. I specialize in Angular, Spring Boot, and modern web technologies. Check out my work below!
        </p>
        <a href="#projects" className={styles.viewWorkBtn}>
          View My Work
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of V.N.R. Keerthiga"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
