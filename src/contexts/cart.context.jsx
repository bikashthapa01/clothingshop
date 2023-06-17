import { createContext, useEffect, useState } from "react";



const addCartItem = (cartItems, productToAdd) => {
  // loop through cartitems to check if item exists

  const itemExists = cartItems.find((item) => item.id === productToAdd.id);

  if (itemExists) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {

  const itemExists = cartItems.find((item) => item.id === productToRemove.id);


  if(itemExists.quantity === 1 ){
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
  }
    return cartItems.map((item) => {

      if (item.id === productToRemove.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
};

const clearCartItem = (cartItems,productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}, // this method is called when a add to cart button is clicked
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(() => {

    const totalAmount = cartItems.reduce((acc,item) => acc + item.price * item.quantity , 0);
    setTotalAmount(totalAmount);
  
  },[cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems,productToRemove))
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems,productToClear))
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems,removeItemFromCart,clearItemFromCart,totalAmount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
