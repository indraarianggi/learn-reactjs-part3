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
const database = firebase.database();
database.ref().set({
    name: 'Indra Arianggi',
    age: 22,
    isSingle: true,
    location: {
        city: 'Depok',
        country: 'Indonesia'
    }
});

// modify data
database.ref('age').set(23);
database.ref('location/city').set('Yogyakarta');

// add new data object
database.ref('attributes').set({
    height: 185,
    weight: 55
});
