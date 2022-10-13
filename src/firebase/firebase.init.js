// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbyeKQSEzBC5sMPJLHnASuQWWq1jsxGZo",
  authDomain: "simple-firebase-authenti-87185.firebaseapp.com",
  projectId: "simple-firebase-authenti-87185",
  storageBucket: "simple-firebase-authenti-87185.appspot.com",
  messagingSenderId: "153288072792",
  appId: "1:153288072792:web:8d607a2331f4ebbcb2b42d",
  measurementId: "G-6VVMS3WHZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;