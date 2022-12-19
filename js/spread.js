// spread operator ...
const arr = [1, 2, 3, 4];
const maxArray = Math.max(arr) //wrong
const maxArray2 = Math.max(...arr);
console.log(maxArray2, maxArray);

// problems in copy an array
const arr2 = arr;
arr2.push(3);
console.log(arr, arr2); //same problem
// solution 
const arr3 = [54, ...arr, 44];
console.log(arr3);