import React from "react";
import ShoppingCard from "./ShoppingCard";
import "../styles/ShoppingCategories.css";
import categories from "../elements/shoppingcategory_objects";

const ShoppingCategories = () => {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <ShoppingCard
          key={cat.id}
          title={cat.title}
          img={cat.src}
          action={cat.action}
        />
      ))}
    </div>
  );
};

export default ShoppingCategories;
