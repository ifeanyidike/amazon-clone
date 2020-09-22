import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import HorizontalSlider from "../components/HorizontalSliderCategories";
import ShoppingCategories from "../components/ShoppingCategories";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <ShoppingCategories />
      <HorizontalSlider />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
