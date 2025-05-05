// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd6paPuBzb94xaPPle0O7q7Y_ruv17SWk",
  authDomain: "event-master-3ebf5.firebaseapp.com",
  projectId: "event-master-3ebf5",
  storageBucket: "event-master-3ebf5.firebasestorage.app",
  messagingSenderId: "86857157712",
  appId: "1:86857157712:web:7a8709d657ba9a43d9d555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)