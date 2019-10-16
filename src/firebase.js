
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyDHggAPpMXfzmPEBz5QV1B9cmMycTsDr_s",
    authDomain: "redux-todo-3ed66.firebaseapp.com",
    databaseURL: "https://redux-todo-3ed66.firebaseio.com",
    projectId: "redux-todo-3ed66",
    storageBucket: "redux-todo-3ed66.appspot.com",
    messagingSenderId: "958757712461",
    appId: "1:958757712461:web:7c2fecbbc92b01bcc56204",
    measurementId: "G-GTKSRFDTSV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 export default firebase;
