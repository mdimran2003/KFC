import React from "react";
import Styles from "./index.module.scss";
import logo from "../../Assets/logo.png";
import CommonTab from "../CommonTab";
import LocationField from "../LocationField";
import deleveryImg from "../../Assets/delevery.png";
import cardrop from "../../Assets/cardrop.png";
import selfPicup from "../../Assets/selfPicup.png";
import DineIn from "../../Assets/DineIn.png";
import DriveThrue from "../../Assets/driveThrue.png";
import LoginBtn from "../LoginBtn";

const tabObj = [
  {
    img: deleveryImg,
    tittle: "Delevery",
  },
  {
    img: cardrop,
    tittle: "Carhop",
  },
  {
    img: selfPicup,
    tittle: "Self-Pickup",
  },
  {
    img: DineIn,
    tittle: "Dine-in",
  },
  {
    img: DriveThrue,
    tittle: "Drive-Thru",
  },
];
const NaveBar = () => {
  return (
    <div className={Styles.navArea}>
      <div className={Styles.navArea__navBar}>
        <div className={Styles.navArea__navBar__tabArea}>
          <span className={Styles.navArea__navBar__tabArea__threeLine}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className={Styles.navArea__navBar__tabArea__logo}>
            <img src={logo} alt="error" />
          </span>
          {tabObj.map((item) => {
            return <CommonTab img={item.img} tittle={item.tittle} />;
          })}
        </div>
        <div className={Styles.navArea__navBar__loginArea}>
          <span>
            <LocationField />
          </span>
          <span className={Styles.navArea__navBar__loginArea__loginBtn}>
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>0</span>
            </span>
            <LoginBtn bgColor="#fff" color="#e4002b" text="عربي" fontWeight="900" fontSize="22px" padding="5px 10px" />
            <LoginBtn text="LOGIN" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
