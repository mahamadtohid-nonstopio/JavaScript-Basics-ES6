/* 

SPREAD : 

Used to split up array or object elements {Properties} 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]


REST :

Used to merge a list of function arguments into an array.
*/


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

console.log(arr3);

const sum = (...args) => {
    let total = 0;
    args.forEach((arg) => {
        total += arg;
    });
    return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15