// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOG9hbPpyGsx0xTKGIsiMt6r7LagCbb5w",
  authDomain: "perfect-tour-guide-auth.firebaseapp.com",
  projectId: "perfect-tour-guide-auth",
  storageBucket: "perfect-tour-guide-auth.appspot.com",
  messagingSenderId: "915514961467",
  appId: "1:915514961467:web:9a77a0c45e5e74007d361e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;