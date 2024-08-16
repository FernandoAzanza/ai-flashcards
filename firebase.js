// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADVeGJOt6BQpLftiyfPPXT3VTO4GYCpGs",
  authDomain: "flashcardsaas-51a37.firebaseapp.com",
  projectId: "flashcardsaas-51a37",
  storageBucket: "flashcardsaas-51a37.appspot.com",
  messagingSenderId: "934037915026",
  appId: "1:934037915026:web:1916dfeeddce373cb0ad4b",
  measurementId: "G-2JW7PNRECP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);