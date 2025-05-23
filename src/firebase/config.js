// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq4ulNM55P9-W37WKMkAYktiIIE2l2cA0",
    authDomain: "spotify-consumer.firebaseapp.com",
    projectId: "spotify-consumer",
    storageBucket: "spotify-consumer.firebasestorage.app",
    messagingSenderId: "801355769376",
    appId: "1:801355769376:web:c622d3ad2ca0084435be45",
    measurementId: "G-GBLDQ1L2RS"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);