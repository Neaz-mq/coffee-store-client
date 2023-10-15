// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFYVHmCTsxxjDXNtk5Z-GWg3Achvyrp_w",
  authDomain: "coffee-store-838e1.firebaseapp.com",
  projectId: "coffee-store-838e1",
  storageBucket: "coffee-store-838e1.appspot.com",
  messagingSenderId: "1001430315607",
  appId: "1:1001430315607:web:272e9e2c242efce4bea912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;