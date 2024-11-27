import React from "react";
import styles from "./hero.module.css";
import HeroIcon from "../../components/hero icon/HeroIcon";
import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <section className={`${styles.hero} ${styles.intersection} ${styles.hero__background}`}>
      {/* <section className="hero intersection hero__background"> */}
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__contentTitle}>{props.title}</h1>
          <HeroIcon />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Hero;
