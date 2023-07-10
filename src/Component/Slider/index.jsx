import React from "react";
import Styles from "./index.module.scss";
import slider1 from "../../Assets/slider1.jpg";
const Slider = () => {
  return (
    <div className={Styles.sliderArea}>
      <span className={Styles.sliderArea__sliderImage}>
        <img src={slider1} alt="error" />
      </span>
    </div>
  );
};

export default Slider;
