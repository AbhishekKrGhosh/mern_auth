// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f550a.firebaseapp.com",
  projectId: "mern-auth-f550a",
  storageBucket: "mern-auth-f550a.appspot.com",
  messagingSenderId: "653329193026",
  appId: "1:653329193026:web:b55b3c6cde2f662733b5db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);