import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./spoilerItem.module.css";
import PropTypes from "prop-types";

const SpoilerItem = ({ title, content, isOpen, onClick }) => {
  const contentHeight = useRef();

  const scrollTo = (e) => {
    const targetElement = e.currentTarget; // Сохраняем ссылку
    setTimeout(() => {
      if (!targetElement || !targetElement.parentElement) {
        console.warn("Элемент или родительский элемент не существует");
        return;
      }
      const element = targetElement.parentElement;
      const elementTop = element.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className={styles.services__card}>
      <button
        className={`${styles.title_container} ${isOpen ? styles.active : ""}`}
        onClick={(e) => {
          onClick();
          scrollTo(e);
        }}
      >
        <h3 className={styles.services__cardTitle}>{title}</h3>
        <FontAwesomeIcon icon={faChevronDown} className={`${styles.iconArrow} ${isOpen ? styles.active : ""}`} />
      </button>

      <div ref={contentHeight} className={styles.content_container} style={isOpen ? { height: contentHeight.current.scrollHeight } : { height: "0px" }}>
        <ul className={styles.services__text}>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
SpoilerItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  childToParent: PropTypes.func,
};
export default SpoilerItem;
