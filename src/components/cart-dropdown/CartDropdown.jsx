import React, { useContext } from "react";
import { Button } from "../Button/Button";
import "./CartDropdown.styles.scss";
import { CartItem } from "../cart-item/CartItem";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems
          ? cartItems.map((cartItem) => {
              return <CartItem cartItem={cartItem} />;
            })
          : "You Cart is Empty"}
      </div>
      <Button onClick={() =>{ 
        setIsCartOpen(false)
        goToCheckout()
        }}>Go To Checkout</Button>
    </div>
  );
};
