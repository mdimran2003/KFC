import React from "react";
import Styles from "./index.module.scss";
const CustumizeBtn = () => {
  return (
    <div className={Styles.btnArea}>
      <p>
        CUSTOMIZE
        <span>
          <i className="fa-solid fa-arrow-right"></i>
        </span>{" "}
      </p>
    </div>
  );
};

export default CustumizeBtn;
