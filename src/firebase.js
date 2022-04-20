// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmqrE0k6GP5DO8SSAV4TGLGerDLujQLP4",
  authDomain: "mundi-reactjs.firebaseapp.com",
  projectId: "mundi-reactjs",
  storageBucket: "mundi-reactjs.appspot.com",
  messagingSenderId: "68592182471",
  appId: "1:68592182471:web:07d034b4ac3ee493c98ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db  = getFirestore(app)

export default db;