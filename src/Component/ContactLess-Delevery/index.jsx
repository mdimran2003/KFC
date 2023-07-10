import React from "react";
import Styles from "./index.module.scss";
import CommonTittle from "../CommonTittle";
import bike from "../../Assets/bike.png";
import DelevaryImageCard from "../DeleveryImageCard";
import DeleveryCard from "../DeleveryCard";
import senitizer from "../../Assets/senitizer.png";
import mask from "../../Assets/mask.png";
import cleaning from "../../Assets/cleaning.png";
import packing from "../../Assets/packing.png";

const ContactLessDelevery = () => {
  return (
    <div className={Styles.deleveyArea}>
      <CommonTittle tittle="CONTACTLESS DELIVERY" img={bike} />
      <div className={Styles.deleveyArea__deleveryCardArea}>
        <span>
          <DelevaryImageCard />
        </span>
        <DeleveryCard img={senitizer} text="Our delivery drivers sanitize their hands before and after every food order" />
        <DeleveryCard img={mask} text="All our delivery drivers wear masks and gloves" />
        <DeleveryCard img={cleaning} text="Our delivery drivers sanitize their hands before and after every food order" />
        <DeleveryCard img={packing} text="Our delivery drivers sanitize their hands before and after every food order" />
      </div>
    </div>
  );
};

export default ContactLessDelevery;
