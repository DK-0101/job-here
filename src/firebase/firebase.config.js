// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7G30jaJF7w0xgP1WGs12dU81cAxwsltU",
  authDomain: "job-here.firebaseapp.com",
  projectId: "job-here",
  storageBucket: "job-here.appspot.com",
  messagingSenderId: "753864536738",
  appId: "1:753864536738:web:7c4f28e25cf3f5c4fd9dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;