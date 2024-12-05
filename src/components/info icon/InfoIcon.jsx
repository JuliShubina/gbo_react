import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./popup.module.css";
import { useState } from "react";

const InfoIcon = () => {
  const [toggle, setToggle] = useState(false);
  const visible = () => {
    setToggle(!toggle);
  };
  return (
    <div className="popup">
      <div className={styles.info_icon_container}>
        <div className={`${styles.only_white} ${styles.info_icon}`}>
          <FontAwesomeIcon onClick={visible} icon={faCircleInfo} />
        </div>
      </div>

      <div className={`${styles.popup_content} ${toggle ? styles.open : ""}`}>
        <div className={styles.popup__text}>
          <a className={styles.popup__phone} href="tel:+380992665168">
            Зателефонувати нам: 099 548 57 67
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoIcon;
