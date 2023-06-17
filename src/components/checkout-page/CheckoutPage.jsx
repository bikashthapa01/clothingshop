import React, { useContext } from "react";
import "./CheckoutPage.styles.scss";

import { CartContext } from "../../contexts/cart.context";

export const CheckoutPage = () => {
  const { cartItems,addItemToCart,removeItemFromCart,clearItemFromCart,totalAmount} = useContext(CartContext);
  return (
    <div className="checkout-product-container">
      <table className="checkout-product-table">
        <thead className="checkout-product-table--header">
          <th>Product</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </thead>

        <tbody>
          {cartItems
            ? cartItems.map((product) => {
                return (
                  <tr className="checkout-product-container">
                    <td>
                      <img
                        className="checkout-product-image"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                    </td>
                    <td>
                      <h2 className="checkout-product-name">{product.name}</h2>
                    </td>
                    <td>
                      <div className="checkout-product-quantity">
                        <p>
                        <span onClick={()=>removeItemFromCart(product)}>-</span>
                          {product.quantity}
                          <span onClick={()=>addItemToCart(product)}>+</span>
                        </p>
                      </div>
                    </td>
                    <td>
                      <p className="checkout-product-price">{product.price}</p>
                    </td>
                    <td>
                      <p onClick={()=> clearItemFromCart(product)}>&#9747;</p>
                    </td>
                  </tr>
                );
              })
            : "You Cart is Empty"}
        </tbody>
      </table>
      <p className="total_amount">Total: £ {totalAmount}</p>
    </div>
  );
};
