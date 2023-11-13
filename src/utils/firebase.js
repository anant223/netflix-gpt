// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIMmS2_OcoO7XIYiZdA25v7vh9nU07kCQ",
  authDomain: "netflixgpt-3a69b.firebaseapp.com",
  projectId: "netflixgpt-3a69b",
  storageBucket: "netflixgpt-3a69b.appspot.com",
  messagingSenderId: "45393170472",
  appId: "1:45393170472:web:38cd851d921bcdd0af651d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth() 