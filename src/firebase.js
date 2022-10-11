import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "trackxp-3318a.firebaseapp.com",
  projectId: "trackxp-3318a",
  storageBucket: "trackxp-3318a.appspot.com",
  messagingSenderId: "840065213267",
  appId: "1:840065213267:web:6adab09251990b4d8d77a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);