import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZEp41XLh63irY7u1jFmJqzd0WPdH4JOE",
  authDomain: "pigkins-website.firebaseapp.com",
  projectId: "pigkins-website",
  storageBucket: "pigkins-website.appspot.com",
  messagingSenderId: "243437101740",
  appId: "1:243437101740:web:7180b0e29e0660d7d4f509",
  measurementId: "G-XH19QYZTY6"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth(app)

const handleGoogleSignIn = () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      // TODO: Handle successful sign in
      console.log(result)
    })
    .catch((error) => {
      // TODO: Handle sign in error
      console.error(error)
    })
}

export { auth, app } 