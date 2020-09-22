import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  DiscoverAmazonSlide,
  WirelessProductsSlide,
  KitchenSlide,
  ToysSlide,
  MensDressSlide,
} from "../elements/shopping_horizontal_slider";

const Product = () => {
  useEffect(() => {
    fetch(
      "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?country=US&keyword=iphone",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
          "x-rapidapi-key":
            "032227889emsh6adb7faf93bfa4ep1f52d0jsn7d8fd2fe47de",
        },
      }
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const param = useParams();
  const id = param.customRoute;
  const products = DiscoverAmazonSlide.concat(
    WirelessProductsSlide,
    KitchenSlide,
    ToysSlide,
    MensDressSlide
  );
  const selectedProductArray = products.filter(
    (product) => product.id === Number(id)
  );
  const selectedProduct = selectedProductArray[0];

  return (
    <div>
      <img src={selectedProduct.src} />
    </div>
  );
};

export default Product;
