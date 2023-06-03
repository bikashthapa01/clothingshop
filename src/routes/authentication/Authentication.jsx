import React from "react";

import { LoginForm } from "../../components/login-form/LoginForm";
import { RegisterForm } from "../../components/register-form/RegisterForm";
import "./Authentication.styles.scss";


export const Authentication = () => {
  
  return (
    <div className="authentication-container">
      <LoginForm />
      <RegisterForm />
    </div>
  );
};
