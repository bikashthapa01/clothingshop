import React from 'react'
import {signInWithGooglePopup,createUserDocumentFromAuth} from "../../utils/firebase/Firebase.utils"

export const Register = () => {
    const logGoogleUser = async() => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user);
    }
  return (
    <div>
        <h1>Register Page</h1>
        <button onClick={logGoogleUser}>
          Signup With Google
        </button>
    </div>
  )
}
 