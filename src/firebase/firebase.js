import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBCBz0HBp83ZDYaHpbXbYPfh_EkBpfyFHo",
    authDomain: "expensify-9abad.firebaseapp.com",
    databaseURL: "https://expensify-9abad.firebaseio.com",
    projectId: "expensify-9abad",
    storageBucket: "expensify-9abad.appspot.com",
    messagingSenderId: "1076513780302"
};

firebase.initializeApp(config);

// test
firebase.database().ref().set({
    name: 'Indra Arianggi'
});
