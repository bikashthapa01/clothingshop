import React from "react";

import { LoginForm } from "../../components/login-form/LoginForm";
import { RegisterForm } from "../../components/register-form/RegisterForm";

export const Login = () => {
  
  return (
    <div className="authentication-form-container">
      <LoginForm/>
      <RegisterForm />
    </div>
  );
};
