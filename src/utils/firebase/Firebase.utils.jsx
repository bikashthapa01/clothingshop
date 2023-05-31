import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYtm2EjxKSOpN_P_Xg5OAcHXunFKpaMUQ",
  authDomain: "clothingshop-b9221.firebaseapp.com",
  projectId: "clothingshop-b9221",
  storageBucket: "clothingshop-b9221.appspot.com",
  messagingSenderId: "214877241904",
  appId: "1:214877241904:web:83059c841897d066b863f5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  provider: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  

  // if user does not exists 

  if(!userSnapShot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,email,createdAt
      })

    }catch(err){
      console.log(err)
    }
  }

  return userDocRef;
};
