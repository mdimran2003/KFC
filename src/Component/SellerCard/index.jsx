import React from "react";
import Styles from "./index.module.scss";
import cardImg from "../../Assets/seller1.jpg";
const SellerCard = () => {
  return (
    <div className={Styles.cardArea}>
      <img src={cardImg} alt="error" />
      <p>Mighty Twist</p>
    </div>
  );
};

export default SellerCard;
