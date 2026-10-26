/* 

1. A promise in JavaScript to a promise in real life..
2. When we make a promise in real life, we are making a commitment to do something in the future.
3. A promise ia an object. There are 3 secrets of the Promise object:
   - Pending: The initial state of a promise.
   - Fulfilled/Resolved: The state of a promise when it has been resolved successfully.
   - Rejected: The state of a promise when it has been rejected. 
*/

const myPromise = new Promise((resolve, reject) => {
    const a = 5 , b = 6;

    const c = a + b;

    if(c === 11){
        resolve('Success');
    } else {
        reject('Error');
    }

})

let promiseResult = myPromise.then((message) => {
    console.log('This is the then block: ' + message);
}).catch((message) => {
    console.log('This is the catch block: ' + message);
})