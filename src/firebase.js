// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuY8tuDt_WrxMm2MBaZxq4lT_67rKThqg",
  authDomain: "personal-profile-c4e82.firebaseapp.com",
  projectId: "personal-profile-c4e82",
  storageBucket: "personal-profile-c4e82.appspot.com",
  messagingSenderId: "827956069642",
  appId: "1:827956069642:web:fb775bfca6942d344266f3",
  measurementId: "G-N9V38ZNZS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);