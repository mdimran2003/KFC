import React from "react";
import Styles from "./index.module.scss";
const MenuItem = ({ img, tittle }) => {
  return (
    <div className={Styles.itemArea}>
      <span className={Styles.itemArea__itemImg}>
        <img src={img} alt="err" />
      </span>
      <p>{tittle}</p>
    </div>
  );
};

export default MenuItem;
