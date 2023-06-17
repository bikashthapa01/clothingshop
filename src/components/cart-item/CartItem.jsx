import React from "react";
import "./CartItem.styles.scss";

export const CartItem = ({ cartItem }) => {
  return (
    <div className="cart-item-container">
      <img className="cart-item-image" src={cartItem.imageUrl} alt={cartItem.name} />
      <div className="cart-item-meta">
        <h2 className="cart-item-title">{cartItem.name}</h2>
        <p className="cart-item-quantity">
          {cartItem.quantity} x £{cartItem.price}
        </p>
      </div>
    </div>
  );
};
