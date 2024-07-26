const score = 100
// console.log(score);

const balance = new Number(5000);
// console.log(balance);

// console.log(balance.toString().length);

// toFixed is used generally in finance and accounting
// console.log(balance.toFixed(2));

const val1 = 23.4567
// console.log(val1.toPrecision(3)); //round off number, return in string

// convert no to readable format (comma seperator form)
const hundreads = 1000000
// console.log(hundreads.toLocaleString());

// convert in indian format
// console.log(hundreads.toLocaleString('en-IN'));


// ++++++++++++++++++++++ MATH ++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-12));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(2, 5, 9, 45, 0, 7, 6));
// console.log(Math.max(2, 5, 9, 45, 0, 7, 6));

// most imp, always from 0 to 1
// console.log(Math.random());

// console.log((Math.random() * 10) + 1); // random might generate 0 val so add 1 (if you don't want zero)

// use it with floor also
// console.log(Math.floor(Math.random() * 10) + 1);

// suppose we need random whole number from 10 to 20
const min = 100
const max = 200
// useful in games etc.
console.log(Math.floor(Math.random() * (max - min + 1)) + min)