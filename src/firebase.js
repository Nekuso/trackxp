import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhyxaw9_F-2kI5Ua16_M5F4He5NfN9vPM",
  authDomain: "trackxp-3318a.firebaseapp.com",
  projectId: "trackxp-3318a",
  storageBucket: "trackxp-3318a.appspot.com",
  messagingSenderId: "840065213267",
  appId: "1:840065213267:web:6adab09251990b4d8d77a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth();