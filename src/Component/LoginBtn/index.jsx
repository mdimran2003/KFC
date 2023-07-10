import React from "react";
import Styles from "./index.module.scss";
const LoginBtn = ({ bgColor, color, text, fontWeight, fontSize, padding }) => {
  return (
    <div
      className={Styles.btnArea}
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        fontWeight: `${fontWeight}`,
        fontSize: `${fontSize}`,
        padding: `${padding}`,
      }}>
      {text}
    </div>
  );
};

export default LoginBtn;
