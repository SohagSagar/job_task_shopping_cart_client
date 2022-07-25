// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqwcpfquxzdX8qxoyTeqHszWAV5BqpyxI",
  authDomain: "shopping-cart-61d41.firebaseapp.com",
  projectId: "shopping-cart-61d41",
  storageBucket: "shopping-cart-61d41.appspot.com",
  messagingSenderId: "163559315540",
  appId: "1:163559315540:web:0b7e9277138a46af5bb5c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;