import React from "react";
import Styles from "./index.module.scss";
import cardImg from "../../Assets/DeleveryCardImg.png";
const DelevaryImageCard = () => {
  return (
    <div className={Styles.cardArea}>
      <img src={cardImg} alt="error" />
    </div>
  );
};

export default DelevaryImageCard;
