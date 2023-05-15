// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATXYryR3PkLpVcrjuOzYWoU4HnoQMj11M",
  authDomain: "ema-jhon-with-firbase-auth.firebaseapp.com",
  projectId: "ema-jhon-with-firbase-auth",
  storageBucket: "ema-jhon-with-firbase-auth.appspot.com",
  messagingSenderId: "421676309902",
  appId: "1:421676309902:web:eae38b40c9f93ea11958df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;