import { useState } from "react";
import styles from "./spoiler.module.css";

import data from "../../data/services.json";
import SpoilerItem from "./SpoilerItem";

const Spoiler = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="spoiler">
      <div className={styles.services__cards}>
        {data.map((item, index) => (
          <SpoilerItem key={index} title={item.title} content={item.content} isOpen={activeIndex === index} onClick={() => handleItemClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Spoiler;
