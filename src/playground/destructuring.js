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
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

// es6 destructuring - change variable name and set default value
const { name: publisherName = 'Self published' } = book.publisher;

console.log(publisherName);