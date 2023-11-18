// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy8AW1rY-1C8dKjJ9HRHS3N-1xZxp66JQ",
  authDomain: "nedhuhotelproject.firebaseapp.com",
  projectId: "nedhuhotelproject",
  storageBucket: "nedhuhotelproject.appspot.com",
  messagingSenderId: "609729275631",
  appId: "1:609729275631:web:acea2bd18ef0ae8afe1d1a",
  measurementId: "G-55TYGG6PTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);