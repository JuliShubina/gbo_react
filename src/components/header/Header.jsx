import React, { useState } from "react";
import "./header.css";
import "./burger.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${menuOpen ? "open" : ""}`}>
      <div className="header__inner">
        <button onClick={toggleMenu} className="header__burger-btn" id="burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <NavLink to="/" className="logo">
          auto-gbo-service
        </NavLink>

        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink onClick={closeMenu} to="/" className="menu__list-link">
                Головна
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink onClick={closeMenu} className="menu__list-link" to="/services">
                Послуги
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink onClick={closeMenu} className="menu__list-link" to="/about">
                Про нас
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink onClick={closeMenu} className="menu__list-link" to="/contacts">
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
