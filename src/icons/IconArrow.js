import React from "react";

import styles from "./IconArrow.module.scss";

const IconArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="14"
      viewBox="0 0 11 14"
      className={styles.icon}
    >
      <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
    </svg>
  );
};

export default IconArrow;
