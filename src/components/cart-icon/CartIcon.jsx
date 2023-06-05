import React, { useContext } from "react";
import "./CartIcon.styles.scss";

import { ReactComponent as ShoppingCartIcon } from "../../assets/cart.svg";
import { CartContext } from "../../contexts/cart.context";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
