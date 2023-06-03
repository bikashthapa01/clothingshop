import React from "react";

import { Register } from "../register/Register";
import { LoginForm } from "../../components/login-form/LoginForm";

export const Login = () => {
  
  return (
    <div className="authentication-form-container">
      <LoginForm/>
      <Register />
    </div>
  );
};
