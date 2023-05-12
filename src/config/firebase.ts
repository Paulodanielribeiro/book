// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWuiiJVKVioqGr8VHgT6WqHRMuoESG2W8",
  authDomain: "expemplo03-cpw4.firebaseapp.com",
  projectId: "expemplo03-cpw4",
  storageBucket: "expemplo03-cpw4.appspot.com",
  messagingSenderId: "1048978955874",
  appId: "1:1048978955874:web:f864bda2d5e77520a9fb3b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp