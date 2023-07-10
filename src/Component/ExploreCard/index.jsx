import React from "react";
import Styles from "./index.module.scss";
import LoginBtn from "../LoginBtn";
import cardImg from "../../Assets/exploreCard.svg";
const ExploreCard = () => {
  return (
    <div className={Styles.cardArea}>
      <span className={Styles.cardArea__cardImage}>
        <img src={cardImg} alt="error" />
      </span>
      <p className={Styles.cardArea__detail}>Adding 11 herbs and spices, Explore our menu and add items to your cart.</p>
      <span className={Styles.cardArea__cardBtn}>
        <LoginBtn text="EXPLORE MENU" />
      </span>
    </div>
  );
};

export default ExploreCard;
