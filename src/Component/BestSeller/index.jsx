import React from "react";
import Styles from "./index.module.scss";
import CommonTittle from "../CommonTittle";
import star from "../../Assets/star.png";
import SellerCard from "../SellerCard";
const BestSeller = () => {
  return (
    <div className={Styles.sellerArea}>
      <CommonTittle tittle="BESTSELLERS" img={star} />
      <div className={Styles.sellerArea__sellerCard}>
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
    </div>
  );
};

export default BestSeller;
