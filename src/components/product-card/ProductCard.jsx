import React from "react";
import { Button } from "../Button/Button";
import "./ProductCard.styles.scss";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <img className="product-image" src={product.imageUrl}/>
      <div className="product-meta">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price"><span className="currency-symbol">£</span>{product.price}</p>
      </div>
      <Button buttonType={"inverted"}>Add to Cart</Button>
    </div>
  );
};
