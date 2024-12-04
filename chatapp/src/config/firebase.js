// url https://console.firebase.google.com/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9J8Dtbg6WG45Uht4iuETX08AScnEClt0",
    authDomain: "chat-app-703d5.firebaseapp.com",
    projectId: "chat-app-703d5",
    storageBucket: "chat-app-703d5.firebasestorage.app",
    messagingSenderId: "803757299458",
    appId: "1:803757299458:web:f66ae33d7d98f58ee9141b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };