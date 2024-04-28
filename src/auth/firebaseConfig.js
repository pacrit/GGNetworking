// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOOzOZmmTkRK-j00LTWiYcE9_a29iHP8Y",
  authDomain: "ggtest-4a925.firebaseapp.com",
  projectId: "ggtest-4a925",
  storageBucket: "ggtest-4a925.appspot.com",
  messagingSenderId: "126183119717",
  appId: "1:126183119717:web:db91cca46a65f0ed019f8c",
  measurementId: "G-BWVFG04XRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;
