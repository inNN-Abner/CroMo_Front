// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE_V4AX5ru-bwR7Ffi1KwYwiBbponBDq4",
  authDomain: "cromo-6707c.firebaseapp.com",
  projectId: "cromo-6707c",
  storageBucket: "cromo-6707c.firebasestorage.app",
  messagingSenderId: "942772753309",
  appId: "1:942772753309:web:644c1d6c7a838c3a005574",
  measurementId: "G-XRNLDF3G88"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)