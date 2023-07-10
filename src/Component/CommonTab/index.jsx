import React from "react";
import Styles from "./index.module.scss";

const CommonTab = ({ img, tittle }) => {
  return (
    <div className={Styles.tabArea}>
      <span className={Styles.tabArea__image}>
        <img src={img} alt="error" />
      </span>
      <span></span>
      <span>{tittle}</span>
    </div>
  );
};

export default CommonTab;
