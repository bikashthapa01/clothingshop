import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signUserOut } from "../../utils/firebase/Firebase.utils";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
