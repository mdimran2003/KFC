import React from "react";
import Styles from "./index.module.scss";
import CommonTittle from "../CommonTittle";
import magicStick from "../../Assets/magicStick.png";
import DealsCard from "../DealsCard";
const TopDeals = () => {
  return (
    <div className={Styles.dealsArea}>
      <CommonTittle tittle="TOP DEALS" img={magicStick} viewbtn="View All" icon={<i className="fa-solid fa-right-to-bracket"></i>} />
      <div className={Styles.dealsArea__deals}>
        <DealsCard />
        <DealsCard />
        <DealsCard />
        <DealsCard />
        <DealsCard />
      </div>
    </div>
  );
};

export default TopDeals;
