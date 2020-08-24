import firebase from 'firebase'
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   };

const firebaseConfig = {
  apiKey: "AIzaSyByf0yEiC90abA1iyhdEWdjFGZC_zCtQRQ",
  authDomain: "work-chat-app.firebaseapp.com",
  databaseURL: "https://work-chat-app.firebaseio.com",
  projectId: "work-chat-app",
  storageBucket: "work-chat-app.appspot.com",
  messagingSenderId: "589726429597",
  appId: "1:589726429597:web:07e89a013801472826ff74",
  measurementId: "G-H26V74HLVK"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const storage = firebase.storage();

export { storage, database }
