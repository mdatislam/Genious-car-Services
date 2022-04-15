// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import App from "./App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf9RvGDQw1JWO4H09OZh9B84aS9RPx7mg",
  authDomain: "gineous-car-services.firebaseapp.com",
  projectId: "gineous-car-services",
  storageBucket: "gineous-car-services.appspot.com",
  messagingSenderId: "943162634075",
  appId: "1:943162634075:web:2ebf4ecb3564e06dd3347e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;