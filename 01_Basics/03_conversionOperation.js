let score = undefined //null // "30abc"    //"30"    // 30 as number

// console.log(typeof score); // OR use typeof as method
// console.log(typeof(score));

let valInNumber = Number(score) // use for type conversion
// console.log(typeof valInNumber);
// console.log(valInNumber);

/**
 * "33" => 33 // from string to number
 * "33abc" => NaN    // typeof is shown as number, but it's not a number
 * true =>1 ; flase => 0
 * null => 0 // typeof(null) is number
 * undefined => NaN  // typeof(undefined) is number
 */

// let isLoggedIn = 1 // true
// let isLoggedIn = "" // false
let isLoggedIn = "Pradeep" // true

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

/**
 * 1 => true; 0=> false
 * "" => false
 * "abc" => true
 */

let someNumber = 32
let strNumber = String(someNumber)

console.log(strNumber);
console.log(typeof strNumber);