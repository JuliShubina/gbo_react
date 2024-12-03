import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./spoilerItem.module.css";

const SpoilerItem = ({ title, content, isOpen, onClick }) => {
  console.log(content);
  const contentHeight = useRef();
  return (
    <div className={styles.services__card}>
      <button className={`${styles.title_container} ${isOpen ? styles.active : ""}`} onClick={onClick}>
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

export default SpoilerItem;
