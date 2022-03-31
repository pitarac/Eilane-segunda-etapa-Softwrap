// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIWb61YImzhdOhH974F8jZgarzseITPWE",
  authDomain: "teste-softwrap-eilane.firebaseapp.com",
  projectId: "teste-softwrap-eilane",
  storageBucket: "teste-softwrap-eilane.appspot.com",
  messagingSenderId: "889312246656",
  appId: "1:889312246656:web:7492fb939b8c86217f5f65",
  measurementId: "G-W9T32BFD74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
