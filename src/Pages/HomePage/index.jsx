import React from "react";
import NaveBar from "../../Component/NavBar";
import Styles from "./index.module.scss";
import Slider from "../../Component/Slider";
import MenuList from "../../Component/MenuList";
import TopDeals from "../../Component/TopDeals";
import BestSeller from "../../Component/BestSeller";
import FourBigCard from "../../Component/FourBigCard";
import ContactLessDelevery from "../../Component/ContactLess-Delevery";
import Footer from "../../Component/Footer";
const HomePage = () => {
  return (
    <div className={Styles.homeArea}>
      <NaveBar />
      <Slider />
      <MenuList />
      <TopDeals />
      <BestSeller />
      <FourBigCard />
      <ContactLessDelevery />
      <Footer />
    </div>
  );
};

export default HomePage;
