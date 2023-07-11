import React from "react";
import Styles from "./index.module.scss";
import CommonTittle from "../CommonTittle";
import MenuItem from "../MenuItem";
import MenuItem1 from "../../Assets/menuItem1.png";
import MenuItem2 from "../../Assets/menuItem2.png";
import MenuItem3 from "../../Assets/menuItem3.png";
import MenuItem4 from "../../Assets/menuItem4.png";
import MenuItem5 from "../../Assets/menuItem5.png";
import legImg from "../../Assets/legPiece.png";

const menuItemObj = [
  {
    img: MenuItem1,
    tittle: "EXCLUSIVE DEALS",
  },
  {
    img: MenuItem2,
    tittle: "FOR ONE",
  },
  {
    img: MenuItem3,
    tittle: "FOR SHARING",
  },
  {
    img: MenuItem4,
    tittle: "SIDE & DISSERTS",
  },
  {
    img: MenuItem5,
    tittle: "BEVERAGE",
  },
];

const MenuList = () => {
  return (
    <div className={Styles.menuArea}>
      <CommonTittle tittle="EXPLORE MENU" img={legImg} viewbtn="View All" icon={<i className="fa-solid fa-right-to-bracket"></i>} />
      <div className={Styles.menuArea__menuItem}>
        {menuItemObj.map((item) => {
          return <MenuItem key={item.tittle} img={item.img} tittle={item.tittle} />;
        })}
      </div>
    </div>
  );
};

export default MenuList;
