// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import { getFirestore, } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";



// Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyC1SPYvpKSn6NkDpjeRIY_MluP8MPcE1iA",
    authDomain: "adashinoartscommissions.firebaseapp.com",
    projectId: "adashinoartscommissions",
    storageBucket: "adashinoartscommissions.firebasestorage.app",
    messagingSenderId: "166622866390",
    appId: "1:166622866390:web:a7145ea57b42499c8d9277",
    measurementId: "G-XLF58EY6RH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { database };
export { auth };
