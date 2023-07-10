import React from "react";
import Styles from "./index.module.scss";

const CommonTittle = ({ tittle, img, viewbtn, icon }) => {
  return (
    <div className={Styles.tittleArea}>
      <div className={Styles.tittleArea__tittle}>
        <span className={Styles.tittleArea__tittle__tText}>{tittle}</span>
        <span className={Styles.tittleArea__tittle__tImg}>
          <img src={img} alt="err" />
        </span>
      </div>
      <div className={Styles.tittleArea__view}>
        <span>{viewbtn}</span>
        <span>{icon}</span>
      </div>
    </div>
  );
};

export default CommonTittle;
