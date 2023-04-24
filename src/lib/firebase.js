// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn3vBCrIdYIhHWRRlaMf0iIJJ1De_HEkI",
    authDomain: "price-prediction-52b23.firebaseapp.com",
    databaseURL: "https://price-prediction-52b23-default-rtdb.firebaseio.com",
    projectId: "price-prediction-52b23",
    storageBucket: "price-prediction-52b23.appspot.com",
    messagingSenderId: "395647856066",
    appId: "1:395647856066:web:83ae12b6963feb875aba5b",
    measurementId: "G-RG3HXGRXRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);