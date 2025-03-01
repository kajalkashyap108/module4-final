// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-K5JFkPiWcpz513uKnRBgx4zR6bUr7S4",
    authDomain: "module4final.firebaseapp.com",
    databaseURL: "https://module4final-default-rtdb.firebaseio.com",
    projectId: "module4final",
    storageBucket: "module4final.firebasestorage.app",
    messagingSenderId: "602175436660",
    appId: "1:602175436660:web:b4b84e4e08cf7534fb1e21",
    measurementId: "G-H4R57YRE1X"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseURL = firebaseConfig.databaseURL;