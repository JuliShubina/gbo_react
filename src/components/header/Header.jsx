import { useEffect, useState } from "react";
import "./header.css";
import "./burger.css";
import { NavLink } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`header ${menuOpen ? "open" : ""} ${isScrolled ? "scrolled" : ""}`}>
      <div className="header__inner">
        <button onClick={toggleMenu} className="header__burger-btn" id="burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <NavLink to="/" className="logo">
          car-service
        </NavLink>

        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink onClick={closeMenu} to="/" className="menu__list-link">
                Головна
              </NavLink>
            </li>

            <li className="menu__list-item menu__dropdown">
              <div className="only-style">
                <span className="menu__list-link" onClick={toggleDropdown}>
                  Послуги
                </span>
                <FontAwesomeIcon onClick={toggleDropdown} className="dropdown_icon" id="FontAwesomeIcon" icon={faChevronDown} />
              </div>
              {isDropdownOpen && (
                <ul className={`menu__dropdown-list ${isDropdownOpen ? "open" : ""}`}>
                  <li className="menu__dropdown-item">
                    <NavLink onClick={closeMenu} to="/services/gbo" className="menu__list-link">
                      ГБО
                    </NavLink>
                  </li>
                  <li className="menu__dropdown-item">
                    <NavLink onClick={closeMenu} to="/services/autoelectric" className="menu__list-link">
                      Автоелектрик
                    </NavLink>
                  </li>
                  <li className="menu__dropdown-item">
                    <NavLink onClick={closeMenu} to="/services/cooling-system" className="menu__list-link">
                      Система охолодження
                    </NavLink>
                  </li>
                </ul>
              )}
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
