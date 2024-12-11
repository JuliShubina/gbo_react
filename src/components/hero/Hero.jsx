import styles from "./hero.module.css";
import HeroIcon from "../../components/hero icon/HeroIcon";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Hero = ({ title, styleBg = {}, titlePlus }) => {
  console.log("--bg-height", styleBg);

  const [isBgHeight100vh, setIsBgHeight100vh] = useState(false);
  const isLandscapeSmallHeight = useMediaQuery({
    query: "(max-height: 500px) and (orientation: landscape)",
  });

  const parallax = () => {
    const moveCoef = 0.3;
    const heroElement = document.querySelector(`.${styles.hero__background}`);
    if (heroElement) {
      // const height = heroElement.clientHeight;
      // console.log("Высота элемента heroElement:", height);

      const move = window.scrollY * moveCoef;
      // heroElement.style.transform = `translate3d(0px, ${move}px, 0px)`;
      heroElement.style.backgroundPosition = `center calc(50% + ${move}px)`;
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
      const bgHeight = computedStyle.getPropertyValue("--bg-height").trim();
      setIsBgHeight100vh(bgHeight === "100vh");
    }
  }, []);

  const shouldRenderHeroIcon = isLandscapeSmallHeight || isBgHeight100vh;

  return (
    <section onScroll={parallax} className={`${styles.hero}  ${styles.hero__background}`} style={styleBg}>
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__contentTitle}>{title}</h1>
          <h2>{titlePlus}</h2>
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
  titlePlus: PropTypes.string,
};
export default Hero;
