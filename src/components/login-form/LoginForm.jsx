import React, { useState } from "react";
import { FormInput } from "../form-input/FormInput";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase.utils";
import { Button } from "../Button/Button";

const defaultFormInput = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [errMessage, setErrMessage] = useState("");
  const [formData, setFormData] = useState(defaultFormInput);
  const { email, password } = formData;

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const logGoogleUser = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setErrMessage("User Not Found");
          break;
        case "auth/wrong-password":
          setErrMessage("Username or Password is Not Correct");
          break;
        default:
          setErrMessage(err.code);
      }
    }

    console.log("Login Successful!");
  };

  const loginFormHandler = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setErrMessage("User Not Found");
      } else {
        setErrMessage("Error Logging in user");
      }
    }
  };

  return (
    <div className="login-form-container">
      <h2>I already have an account.</h2>
      <span>Enter your username and password to login into website.</span>
      <p style={{ color: "red" }}>{errMessage}</p>
      <form onSubmit={loginFormHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleDataChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleDataChange}
        />
        <div className="button-group">
          <Button type="submit">Login</Button>
          <Button buttonType="google" type="button" onClick={logGoogleUser}>
            Login With Google
          </Button>
        </div>
      </form>
    </div>
  );
};
