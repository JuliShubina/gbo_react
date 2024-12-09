import styles from "./hero.module.css";
import HeroIcon from "../../components/hero icon/HeroIcon";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Hero = ({ title, styleBg = { "--bg-height": "370px" }, beforeHeight = "370px" }) => {
  const [isBeforeHeight100vh, setIsBeforeHeight100vh] = useState(false);
  const isLandscapeSmallHeight = useMediaQuery({
    query: "(max-height: 500px) and (orientation: landscape)",
  });
  const parallax = () => {
    const moveCoef = 0.3;
    const move = window.scrollY * moveCoef;
    const heroElement = document.querySelector(`.${styles.hero__background}`);
    if (heroElement) {
      heroElement.style.backgroundPositionY = `${move}px`;
    } else console.log("Элемент не существует");
  };
  useEffect(() => {
    window.addEventListener("scroll", parallax);

    return () => {
      window.removeEventListener("scroll", parallax); // Убираем обработчик при размонтировании
    };
  }, []);
  useEffect(() => {
    const section = document.querySelector(`.${styles.hero}`);
    if (section) {
      const computedStyle = getComputedStyle(section);
      const beforeHeight = computedStyle.getPropertyValue("--before-height").trim();
      setIsBeforeHeight100vh(beforeHeight === "100vh");
    }
  }, [styleBg]);
  const shouldRenderHeroIcon = isLandscapeSmallHeight || isBeforeHeight100vh;

  return (
    <section onScroll={parallax} className={`${styles.hero}  ${styles.hero__background}`} style={{ ...styleBg, "--before-height": beforeHeight }}>
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__contentTitle}>{title}</h1>
          {shouldRenderHeroIcon && <HeroIcon />}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  styleBg: PropTypes.object,
  beforeHeight: PropTypes.string,
};
export default Hero;
