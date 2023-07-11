import React from "react";
import Styles from "./index.module.scss";
import slider1 from "../../Assets/slider1.jpg";
import slider2 from "../../Assets/slider2.jpg";
import slider3 from "../../Assets/slider3.jpg";
import slider4 from "../../Assets/slider4.jpg";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = () => {
  const options = {
    margin: 30,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <ReactOwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <div className={Styles.sliderArea}>
          <span className={Styles.sliderArea__sliderImage}>
            <img src={slider1} alt="error" />
          </span>
        </div>
      </div>
      <div className="item">
        <div className={Styles.sliderArea}>
          <span className={Styles.sliderArea__sliderImage}>
            <img src={slider2} alt="error" />
          </span>
        </div>
      </div>
      <div className="item">
        <div className={Styles.sliderArea}>
          <span className={Styles.sliderArea__sliderImage}>
            <img src={slider3} alt="error" />
          </span>
        </div>
      </div>
      <div className="item">
        <div className={Styles.sliderArea}>
          <span className={Styles.sliderArea__sliderImage}>
            <img src={slider4} alt="error" />
          </span>
        </div>
      </div>
    </ReactOwlCarousel>
  );
};

export default Slider;
