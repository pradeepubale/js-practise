// array

const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ['shaktimaan', 'doga']
const myArr2 = new Array(10, 20, 30, 40)

// console.log(myArr[0]);

//array methods
// myArr.push(6)
// console.log(myArr);
// myArr.push(8)
// console.log(myArr);
// myArr.pop()

// unshift method- Insert at the begining.
// myArr.unshift(11);
// console.log(myArr);

// myArr.shift() // remove element from begining

// includes 9 in array or not
// console.log(myArr.includes(9)); // false

// console.log(myArr.indexOf(3)); // -1 if not in array

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice and splice

console.log("A  ", myArr);
const myn1 = myArr.slice(1 ,3);
console.log(myn1);
console.log("B  ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C  ", myArr);