// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnIFm8HZ_bQ0jqhqm4W6vwYA94fYuwG1E",
  authDomain: "bakendgr.firebaseapp.com",
  projectId: "bakendgr",
  storageBucket: "bakendgr.appspot.com",
  messagingSenderId: "528936704900",
  appId: "1:528936704900:web:ace9672736032572cddbd1",
  measurementId: "G-D87CEJD6F3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
