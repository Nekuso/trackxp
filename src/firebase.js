import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA5NAA3cIhmEIUj7qZ6VRLb1SEgwb_JhM",
  authDomain: "trackxp-3bd25.firebaseapp.com",
  projectId: "trackxp-3bd25",
  storageBucket: "trackxp-3bd25.appspot.com",
  messagingSenderId: "125081124097",
  appId: "1:125081124097:web:7e1e4f47f9f944afc62f00",
  measurementId: "G-M9L430Q1Q9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth();