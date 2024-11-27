import React from "react";
import styles from "./hero.module.css";
import HeroIcon from "../../components/hero icon/HeroIcon";

const Hero = () => {
  return (
    <section className={`${styles.hero} ${styles.intersection} ${styles.hero__background}`}>
      {/* <section className="hero intersection hero__background"> */}
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__contentTitle}>Послуги</h1>
          <HeroIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;
