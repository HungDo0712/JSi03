 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyBUa_FhR_DywGtFAmZciZRtnqIEGNm_9S0",
   authDomain: "hungdo-c0672.firebaseapp.com",
   projectId: "hungdo-c0672",
   storageBucket: "hungdo-c0672.appspot.com",
   messagingSenderId: "371869019377",
   appId: "1:371869019377:web:2bd777842b24caa2138d50",
   measurementId: "G-G7FV1HR4RW"
 };
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);