import React, { useContext } from "react";
import { Button } from "../Button/Button";
import "./ProductCard.styles.scss";
import { CartContext } from "../../contexts/cart.context";



export const ProductCard = ({ product }) => {

  const {addItemToCart} = useContext(CartContext);
  
  const addToCartHandler = () => {
    addItemToCart(product);
  }

  return (
    <div className="product-card-container">
      <img className="product-image" src={product.imageUrl} alt={product.name}/>
      <div className="product-meta">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price"><span className="currency-symbol">£</span>{product.price}</p>
      </div>
      <Button buttonType={"inverted"} onClick={addToCartHandler}>Add to Cart</Button>
    </div>
  );
};
