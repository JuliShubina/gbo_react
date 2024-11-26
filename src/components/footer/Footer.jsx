import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer intersection">
      <div className="footer__inner">
        Записатися на сервіс:
        <a className="footer__phone" href="tel:+380992665168">
          {" "}
          099 548 57 67
        </a>
      </div>
    </footer>
  );
};

export default Footer;
