// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhh_hTzO6aLqrN6VcWsLrlVt17WYLrHA",
  authDomain: "smart-deals-6eb9f.firebaseapp.com",
  projectId: "smart-deals-6eb9f",
  storageBucket: "smart-deals-6eb9f.firebasestorage.app",
  messagingSenderId: "256045044652",
  appId: "1:256045044652:web:a08dfb3b1a92f0dcd46009",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
