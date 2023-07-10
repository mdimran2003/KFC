import React from "react";
import Styles from "./index.module.scss";
const LocationField = () => {
  return (
    <div className={Styles.locationArea}>
      <span className={Styles.locationArea__icon}>
        <i class="fa-solid fa-location-dot"></i>
      </span>
      <div className={Styles.locationArea__textArea}>
        <p className={Styles.locationArea__textArea__selectedText}>SELECT LOCATION </p>
        <p className={Styles.locationArea__textArea__getListText}>Get accurate pricing and menu listing</p>
      </div>
      <span className={Styles.locationArea__select}>
        <select name="Select" id="Select">
          <option value="Select">Select</option>
        </select>
      </span>
    </div>
  );
};

export default LocationField;
