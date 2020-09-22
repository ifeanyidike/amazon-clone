import React from "react";
import {
  DiscoverAmazonSlide,
  WirelessProductsSlide,
  KitchenSlide,
  ToysSlide,
  MensDressSlide,
} from "../elements/shopping_horizontal_slider";
import HorizontalSlider from "./HorizontalSlider";

const HorizontalSliderCategories = () => {
  return (
    <div>
      <HorizontalSlider
        ArraySlide={DiscoverAmazonSlide}
        title="Discover Amazon"
        linktext="Click to learn more"
        to="/"
      />
      <HorizontalSlider
        ArraySlide={WirelessProductsSlide}
        title="Must have Wireless products"
        linktext="See more"
        to="/"
      />
      <HorizontalSlider
        ArraySlide={KitchenSlide}
        title="Best Sellers in Kitchen"
        linktext="See more"
        to="/"
      />
      <HorizontalSlider
        ArraySlide={ToysSlide}
        title="Our favorite Toys"
        linktext="See more"
        to="/"
      />
      <HorizontalSlider
        ArraySlide={MensDressSlide}
        title="Men's Dress Shirts under $30"
        linktext="See more"
        to="/"
      />

      <HorizontalSlider
        ArraySlide={KitchenSlide}
        position="last"
        title="Inspired by your browsing history"
      />
    </div>
  );
};

export default HorizontalSliderCategories;
