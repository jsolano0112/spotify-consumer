// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh3GhCWmSILAE44jlNLk3GSqtD4qjgkOo",
  authDomain: "events-app-afa4c.firebaseapp.com",
  projectId: "events-app-afa4c",
  storageBucket: "events-app-afa4c.firebasestorage.app",
  messagingSenderId: "852550725781",
  appId: "1:852550725781:web:dba763a5774389ba6c2b9c"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);