import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero__icon.css";

const HeroIcon = () => {
  return (
    <div className="hero__content-icon">
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};

export default HeroIcon;
