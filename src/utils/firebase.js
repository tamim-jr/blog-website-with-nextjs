// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-hunter-f9a74.firebaseapp.com",
  projectId: "blog-hunter-f9a74",
  storageBucket: "blog-hunter-f9a74.appspot.com",
  messagingSenderId: "274257589360",
  appId: "1:274257589360:web:525282920b88c5124d70b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);