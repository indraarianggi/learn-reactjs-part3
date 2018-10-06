/*
*   Object Destructuring
*/

// const person = {
//     // name: 'Indra Arianggi',
//     age: 17,
//     location: {
//         city: 'Depok',
//         temp: 27
//     }
// }

// // es6 destructuring - and set default value (for name)
// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// // es6 destructuring - and change default variable name (temp -> temperature)
// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// Challenge
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// // es6 destructuring - change variable name and set default value
// const { name: publisherName = 'Self published' } = book.publisher;

// console.log(publisherName);



/*
*   Array Destructuring
*/

const address = ['Jalan Merdeka Sejati No. 17', 'Jakarta', 'Indonesia', '1945'];

// const [street, city, state, zip] = address;
const [, city, state] = address;
// const [, city = 'Yogyakarta'] = address;

console.log(`You are in ${city}, ${state}.`);


// Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , priceMedium] = item;

console.log(`A medium ${coffee} costs ${priceMedium}`)
