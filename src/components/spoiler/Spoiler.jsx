import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./spoiler.module.css";

import SpoilerItem from "./SpoilerItem";
import contentGbo from "../../data/gbo.json";
import contentCooling from "../../data/cooler.json";
import contentElectric from "../../data/elect.json";

const Spoiler = ({ from }) => {
  const [activeIndices, setActiveIndices] = useState([]); //массив индексов всех открытых спойлеров.

  const handleItemClick = (index) => {
    setActiveIndices((prevIndices) => (prevIndices.includes(index) ? prevIndices.filter((i) => i !== index) : [...prevIndices, index]));
  };
  let content = [];
  switch (from) {
    case "GboPage":
      content = contentGbo;
      break;
    case "CoolingSystem":
      content = contentCooling;
      break;
    case "AutoElectrician":
      content = contentElectric;
      break;
  }

  return (
    <div className="spoiler">
      <div className={styles.services__cards}>
        {content.map((item, index) => (
          <SpoilerItem key={index} title={item.title} content={item.content} isOpen={activeIndices.includes(index)} onClick={() => handleItemClick(index)} />
        ))}
      </div>
    </div>
  );
};
Spoiler.propTypes = {
  from: PropTypes.string.isRequired,
};

export default Spoiler;
