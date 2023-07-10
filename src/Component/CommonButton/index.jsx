import React from "react";
import Styles from "./index.module.scss";
const CommonButton = () => {
  return (
    <div className={Styles.btnArea}>
      <span>+</span>
      <span>ADD TO CART</span>
    </div>
  );
};

export default CommonButton;
