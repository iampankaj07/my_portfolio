// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // If using authentication
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage"; // If using Storage

const firebaseConfig = {
  apiKey: "AIzaSyD1FpdbRDHYffw0BENULERoVt2PMxa044g",
  authDomain: "blog-95773.firebaseapp.com",
  projectId: "blog-95773",
  storageBucket: "blog-95773.firebasestorage.app",
  messagingSenderId: "362673241106",
  appId: "1:362673241106:web:9fc7f0967429d02c4e2ccb",
  measurementId: "G-3H6GNLJ0EP"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
