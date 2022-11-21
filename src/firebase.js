import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Server 1
const firebaseConfig = {
  apiKey: "AIzaSyBA5NAA3cIhmEIUj7qZ6VRLb1SEgwb_JhM",
  authDomain: "trackxp-3bd25.firebaseapp.com",
  projectId: "trackxp-3bd25",
  storageBucket: "trackxp-3bd25.appspot.com",
  messagingSenderId: "125081124097",
  appId: "1:125081124097:web:7e1e4f47f9f944afc62f00",
  measurementId: "G-M9L430Q1Q9"
};

// Server 2
// const firebaseConfig = {
//   apiKey: "AIzaSyBhyxaw9_F-2kI5Ua16_M5F4He5NfN9vPM",
//   authDomain: "trackxp-3318a.firebaseapp.com",
//   projectId: "trackxp-3318a",
//   storageBucket: "trackxp-3318a.appspot.com",
//   messagingSenderId: "840065213267",
//   appId: "1:840065213267:web:6adab09251990b4d8d77a6"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth();