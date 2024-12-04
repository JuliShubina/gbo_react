import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero__icon.css";

const HeroIcon = () => {
  const scrollToContent = (sectionId) => {
    const element = document.getElementById(sectionId); // Find the element with the ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    } else {
      console.warn("Element with ID", sectionId, "not found");
    }
  };

  return (
    <div className="hero__content-icon">
      <FontAwesomeIcon id="FontAwesomeIcon" onClick={() => scrollToContent("FontAwesomeIcon")} icon={faChevronDown} />
    </div>
  );
};

export default HeroIcon;

// const arrowDown = document.querySelector(".hero__content-icon");

// arrowDown.addEventListener("click", () => {
//   const element = document.querySelector(".hero__content-icon");

//   element.scrollIntoView({
//     behavior: "smooth",
//   });
// });
