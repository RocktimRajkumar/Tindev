import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlS9aiqqH1RA91tGPrGnuabWYTEPL5qqM",
    authDomain: "rishtey-748cc.firebaseapp.com",
    databaseURL: "https://rishtey-748cc.firebaseio.com",
    projectId: "rishtey-748cc",
    storageBucket: "rishtey-748cc.appspot.com",
    messagingSenderId: "761796471746",
    appId: "1:761796471746:web:bb8247a7c6ea388a52045b",
    measurementId: "G-LD9QS7BJBV"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;