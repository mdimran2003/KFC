import React from "react";
import Styles from "./index.module.scss";
import footerLogo from "../../Assets/footerLogo.png";
const Footer = () => {
  return (
    <div className={Styles.footerArea}>
      <span className={Styles.footerArea__logo}>
        <img src={footerLogo} alt="error" />
      </span>
      <p className={Styles.footerArea__description}>
        Items availability, prices, participation, delivery areas and charges, purchase requirements for delivery may vary.
      </p>
      <div className={Styles.footerArea__menuList}>
        <ul>
          <li>Menu</li>
          <li>StoreLocations</li>
          <li>BulkOrder</li>
          <li>PrivacyPolicy</li>
          <li>Terms & Conditions</li>
          <li>Contact</li>
        </ul>
      </div>
      <span className={Styles.footerArea__icon}>
        <span>
          <i className="fa-brands fa-facebook-f"></i>
        </span>
        <span>
          <i className="fa-brands fa-twitter"></i>
        </span>
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
      </span>
      <p className={Styles.footerArea__copyRight}>©KFC, Inc. All rights reserved.</p>
      <span className={Styles.footerArea__smallBox}></span>
      <span className={Styles.footerArea__smallBox}></span>
      <span className={Styles.footerArea__smallBox}></span>
    </div>
  );
};

export default Footer;
