import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        Записатися на сервіс:
        <a className={styles.footer__phone} href="tel:+380992665168">
          +38(099) 548 57 67
        </a>
      </div>
    </footer>
  );
};

export default Footer;
