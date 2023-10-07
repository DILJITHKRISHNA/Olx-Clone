import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVHlqyZn5CX1v1uuONGr4Misaq3w7HUyI",
    authDomain: "olx-clone-3f6c6.firebaseapp.com",
    projectId: "olx-clone-3f6c6",
    storageBucket: "olx-clone-3f6c6.appspot.com",
    messagingSenderId: "971431466612",
    appId: "1:971431466612:web:b6a5471faac014f810a321",
    measurementId: "G-H25P2ZQSC7"
  };

export default firebase.initializeApp(firebaseConfig)

