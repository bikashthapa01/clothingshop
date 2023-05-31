import React from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import "./Navigation.scss"


const NavigationBar = () => {
  return (
    <>
      <div className="navigation-container">
        <Link to="/">
          <Logo className="site-logo" />
        </Link>
        <div className="navigation-links">
          <Link className="nav-link" to="/shop" >Shop</Link>
          <Link className="nav-link" to="/register" >Signup</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
