import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signUserOut } from "../../utils/firebase/Firebase.utils";
import {CartIcon} from "../../components/cart-icon/CartIcon"
import { CartDropdown } from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/cart.context";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOutHandler = async() => {
      await signUserOut();
  }

  return (
    <>
      <div className="navigation-container">
        <Link to="/">
          <Logo className="site-logo" />
        </Link>
        <div className="navigation-links">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Logout
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Login
            </Link>
          )}
          <CartIcon />
          
        </div>
        {isCartOpen ? <CartDropdown /> : ""}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
