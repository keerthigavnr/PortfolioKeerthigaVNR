import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { DownloadButton } from "../DownloadButton/DownloadButton";

export const Hero = () => {
  return (
    <section className={styles.container} id='/'>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Keerthiga</h1>
        <p className={styles.description}>
I'm a Computer Science Engineer with experience in full-stack development. I specialize in Angular, Spring Boot, React, and love exploring new technologies and modern web frameworks. Check out my work below! </p>
        <div className={styles.buttonContainer}>
          <a href="#projects" className={styles.viewWorkBtn}>
            View My Work
          </a>
          <DownloadButton resumeUrl={getImageUrl("resume/Keerthiga_Resume.pdf")} />
        </div>
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
