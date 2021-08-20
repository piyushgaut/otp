import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDSg8my4qFIPJvj_GNZ62ITFiUc-Ool-3o",
    authDomain: "otp-app-5d3c5.firebaseapp.com",
    projectId: "otp-app-5d3c5",
    storageBucket: "otp-app-5d3c5.appspot.com",
    messagingSenderId: "647985460656",
    appId: "1:647985460656:web:1cce681229b33d1ca09275"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase