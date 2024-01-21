import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZSzkxPofKV5ImEcyYayvXLXIeK_xRzoU",
  authDomain: "clone-11e7e.firebaseapp.com",
  projectId: "clone-11e7e",
  storageBucket: "clone-11e7e.appspot.com",
  messagingSenderId: "963075335531",
  appId: "1:963075335531:web:62396558feb4a65d5bd82e",
  measurementId: "G-P971JEL9WW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
