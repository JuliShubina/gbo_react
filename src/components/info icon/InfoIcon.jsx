import React from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popup.css";

const InfoIcon = () => {
  return (
    <div className="info-icon-container">
      <div className="only-white info-icon">
        <FontAwesomeIcon icon={faCircleInfo} />
      </div>
    </div>
  );
};

export default InfoIcon;
