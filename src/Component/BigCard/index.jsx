import React from "react";
import Styles from "./index.module.scss";
const BigCard = ({ img }) => {
  return (
    <div className={Styles.card}>
      <img src={img} alt="error" />
    </div>
  );
};

export default BigCard;
