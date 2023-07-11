import React from "react";
import Styles from "./index.module.scss";
import dealImg from "../../Assets/dealImg1.png";
import CommonButton from "../CommonButton";
import CustumizeBtn from "../CustumizeBtn";
const DealsCard = () => {
  return (
    <div className={Styles.cardArea}>
      <span className={Styles.cardArea__dealImg}>
        <img src={dealImg} alt="err" />
      </span>
      <div className={Styles.cardArea__dealname}>
        <p>8 Pcs. Lay's Flamin' Hot Bucket</p>
        <span>
          <i className="fa-regular fa-heart"></i>
        </span>
      </div>
      <hr />
      <p className={Styles.cardArea__dealDetail}>8 Pcs Lay's Chicken + Family Fries + Large Coleslaw + 500mL Drink</p>
      <div className={Styles.cardArea__custmizeDeal}>
        <div className={Styles.cardArea__custmizeDeal__priceDetal}>
          <span className={Styles.cardArea__custmizeDeal__priceDetal__priceOff}>132 AED</span>
          <p className={Styles.cardArea__custmizeDeal__priceDetal__price}>
            69 AED <span className={Styles.cardArea__custmizeDeal__priceDetal__price__discount}>48% OFF</span>
          </p>
        </div>
        <CustumizeBtn />
      </div>
      <span className={Styles.cardArea__dealBtn}>
        <CommonButton />
      </span>
    </div>
  );
};

export default DealsCard;
