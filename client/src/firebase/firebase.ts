// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP-9KoY2beI3GRo6k6G-qY2Z31LIRw1Hw",
  authDomain: "desafio3-compass.firebaseapp.com",
  projectId: "desafio3-compass",
  storageBucket: "desafio3-compass.appspot.com",
  messagingSenderId: "80052698157",
  appId: "1:80052698157:web:86720727eea9772b680ca4",
  measurementId: "G-87EBXMBHVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth};