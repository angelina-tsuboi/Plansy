import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyClch24BAHqpwl916YK-RMD8IdnItw5LfY",
    authDomain: "blogello.firebaseapp.com",
    databaseURL: "https://blogello.firebaseio.com",
    projectId: "blogello",
    storageBucket: "blogello.appspot.com",
    messagingSenderId: "1066845201858",
    appId: "1:1066845201858:web:7bd47f0bbf5ec644d4225b",
    measurementId: "G-8N180THH8F"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;