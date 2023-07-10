import React from "react";
import Styles from "./index.module.scss";
const DeleveryCard = ({ img, text }) => {
  return (
    <div className={Styles.cardArea}>
      <span>
        <img src={img} alt="error" />
      </span>
      <p>{text}</p>
    </div>
  );
};

export default DeleveryCard;
