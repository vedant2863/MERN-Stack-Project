// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY  ,
  authDomain: "mern-estate-db6b0.firebaseapp.com",
  projectId: "mern-estate-db6b0",
  storageBucket: "mern-estate-db6b0.appspot.com",
  messagingSenderId: "356291161854",
  appId: "1:356291161854:web:84c42906fcc44c31fe7faf",
  measurementId: "G-4ZQ74PL5KS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);