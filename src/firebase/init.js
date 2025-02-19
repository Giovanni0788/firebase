// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByd9Lgc9JHvxWKYU4zn0vjJlpqlZHwhuU",
  authDomain: "fir-practice-ae7aa.firebaseapp.com",
  projectId: "fir-practice-ae7aa",
  storageBucket: "fir-practice-ae7aa.firebasestorage.app",
  messagingSenderId: "633433999618",
  appId: "1:633433999618:web:5972b31a1751cbc769da1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
