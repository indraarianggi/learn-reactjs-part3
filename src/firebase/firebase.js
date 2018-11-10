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

const database = firebase.database();

// Set (add) data to database
database.ref().set({
    name: 'Indra Arianggi',
    age: 22,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Depok',
        country: 'Indonesia'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed. ', e);
});

// Update (modify) data
database.ref().update(
    {
        stressLevel: 9,
        'job/company': 'Amazon',
        'location/city': 'Yogyakarta'
    }
).then(() => {
    console.log('Data is updated');
}).catch((e) => {
    console.log('Update failed. ', e);
});

// Delete data
database.ref('isSingle').remove()
        .then(() => {
            console.log('isSingle property has been removed');
        }).catch((e) => {
            console.log('Remove failed. ', e);
        });

// Get data from database (firebase)
// Method 1
// database.ref('job/company')
//         .once('value')
//         .then((snapshot) => {
//             const val = snapshot.val();
//             console.log(val);
//         })
//         .catch((e) => {
//             console.log('Error fatching data', e);
//         });

// Method 2
const onValueChange = database.ref()
                            .on('value', (snapshot) => {
                                console.log(snapshot.val());
                            }, (e) => {
                                console.log('Error with data fetching. ', e);
                            });
// setTimeout(() => {
//     database.ref('age').set(27);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// Challenge
// const onValueChange2 = database.ref()
//                                 .on('value', (snapshot) => {
//                                     const val = snapshot.val();
//                                     const message = `${val.name} is ${val.job.title} at ${val.job.company}.`;
//                                     console.log(message);
//                                 }, (e) => {
//                                     console.log('Error fetching data. ', e);
//                                 });
// setTimeout(() => {
//     database.ref().update(
//         {
//             job: {
//                 title: 'Fullstack Web developer',
//                 company: 'Tokopedia'
//             }
//         }
//     );
// }, 3500);
