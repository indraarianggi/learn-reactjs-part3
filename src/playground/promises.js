const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Indra',
            age: 22
        });
        // reject('Something went wrong!');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');
