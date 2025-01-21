// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9KWSY9q-vYbACE7cC9QHnTMpU5zr5VtA",
  authDomain: "masg-4a0da.firebaseapp.com",
  projectId: "masg-4a0da",
  storageBucket: "masg-4a0da.firebasestorage.app",
  messagingSenderId: "571547692392",
  appId: "1:571547692392:web:a0b2c2b0547ff1e1db7add",
  measurementId: "G-7KZJ89XG47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;