import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <button className="header__burger-btn" id="burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="#" className="logo">
          <div>auto-gbo-service</div>
        </a>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">
                <span>Головна</span>
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./services.html" className="menu__list-link">
                Послуги
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./about.html" className="menu__list-link">
                Про нас
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./contacts.html" className="menu__list-link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
