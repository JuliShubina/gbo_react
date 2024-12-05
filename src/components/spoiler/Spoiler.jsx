import { useState } from "react";
import styles from "./spoiler.module.css";

import content from "../../data/services.json";
import SpoilerItem from "./SpoilerItem";

const Spoiler = () => {
  const [activeIndices, setActiveIndices] = useState([]); //массив индексов всех открытых спойлеров.

  const handleItemClick = (index) => {
    setActiveIndices((prevIndices) => (prevIndices.includes(index) ? prevIndices.filter((i) => i !== index) : [...prevIndices, index]));
  };

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

export default Spoiler;
