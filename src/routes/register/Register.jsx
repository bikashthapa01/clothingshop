import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";
import { FormInput } from "../../components/form-input/FormInput";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("Password Must be more than 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Password Do Not Match");
      return;
    }

    // at this stage all data are validated.

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userData = {
        ...user,
        displayName: displayName,
      };

      await createUserDocumentFromAuth(userData);

      console.log("New Account Created.");

      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="register-account-container">
        <h2>I dont have an Account.</h2>
        <span>Create new Acccount to star ordering.</span>

        <p style={{ color: "red" }}>{errorMessage}</p>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            required
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />

          <FormInput
            label="Email"
            type="email"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />

          <FormInput
            label="Password"
            type="password"
            required
            name="password"
            value={password}
            onChange={handleChange}
          />
          
          <FormInput
            label="Confirm Password"
            type="password"
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Register Account</button>
        </form>
      </div>
    </>
  );
};
