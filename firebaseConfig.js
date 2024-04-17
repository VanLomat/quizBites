import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyC13SF8oePAmD9Sa9wHvO6PqJ1u2rX_7uE ',
    authDomain: 'quizbites-e86b9.firebaseapp.com ',
    databaseURL: 'https://quizbites-e86b9-default-rtdb.firebaseio.com/',
    projectId: 'quizbites-e86b9',
    storageBucket: 'quizbites-e86b9.appspot.com',
    messagingSenderId: '976509004455',
    appId: '1:976509004455:android:0fd1ebce9e7fc8107b0982',
    measurementId: 'G-NQNYYWK01S',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
