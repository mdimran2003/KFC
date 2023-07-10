import React from "react";
import Styles from "./index.module.scss";
import BigCard from "../BigCard";
import card1 from "../../Assets/bigCard1.png";
import card2 from "../../Assets/bigCard2.png";
import card3 from "../../Assets/bigCard3.png";
import ExploreCard from "../ExploreCard";
const FourBigCard = () => {
  return (
    <div className={Styles.cardArea}>
      <BigCard img={card1} />
      <BigCard img={card2} />
      <BigCard img={card3} />
      <ExploreCard />
    </div>
  );
};

export default FourBigCard;
