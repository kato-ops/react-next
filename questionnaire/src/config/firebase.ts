// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD8TfVSRsSRmtWM_tbTw9vGs9G5AOUHqM",
    authDomain: "questionnaire-998dc.firebaseapp.com",
    projectId: "questionnaire-998dc",
    storageBucket: "questionnaire-998dc.firebasestorage.app",
    messagingSenderId: "253121319564",
    appId: "1:253121319564:web:c187ebf4b4cfec88dee1a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }