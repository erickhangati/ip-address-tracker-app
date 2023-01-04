import React from "react";

import styles from "./DetailsItem.module.scss";

// Re-usable Details Item Component.

const DetailsItem = ({ title, description, className }) => {
  return (
    <div className={`${styles.item}${className ? ` ${className}` : ""}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DetailsItem;
