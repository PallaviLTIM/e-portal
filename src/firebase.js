// import firebase from "firebase/app";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyBeSreDhGnxDtdBHIfiaiBYayRtH1QsA_M",
  authDomain: "e-portal-77ab0.firebaseapp.com",
  projectId: "e-portal-77ab0",
  storageBucket: "e-portal-77ab0.appspot.com",
  messagingSenderId: "530524351100",
  appId: "1:530524351100:web:95aa7de2243fef76bbb7f9",
  measurementId: "G-YR9Z1DYH8F",
});

export const auth = app.auth();
export default app;
