// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlZXFsJOtfxBAVFX-c5XppYtpPjDeHKDQ",
  authDomain: "login-auth786.firebaseapp.com",
  projectId: "login-auth786",
  storageBucket: "login-auth786.firebasestorage.app",
  messagingSenderId: "126209301333",
  appId: "1:126209301333:web:3d4617375578865059addc"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
