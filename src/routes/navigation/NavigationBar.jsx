import React from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import "./Navigation.styles.scss"


const NavigationBar = () => {
  return (
    <>
      <div className="navigation-container">
        <Link to="/">
          <Logo className="site-logo" />
        </Link>
        <div className="navigation-links">
          <Link className="nav-link" to="/shop" >Shop</Link>
          <Link className="nav-link" to="/auth" >Login</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
