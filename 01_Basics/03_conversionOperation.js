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

// console.log(strNumber);
// console.log(typeof strNumber);

// **********************Operations *******

let value = 3
let negVal = -value

// console.log(negVal);
// console.log(typeof negVal);

/**
 * Arithmatic Operations
 */

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%2);

let str1 = "Hello "
let str2 = "world"
let str3 = str1 + str2

// console.log(str3);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // 122 if first is string then others also converted in string
// console.log(1 + 2 + "2"); //32
// console.log( ((3 + 7) * 9) / 5); // use parenthesis for readability


// console.log(+true); // never do it rubbish way =>1
// console.log(+""); // don't do it silly => 0

// Radability is very Imp in coding
let no1, no2, no3
no1 = no2 = no3 = 2+2 // stupid way

let gameCounter = 100
//gameCounter++; // 101
++gameCounter; // 101
console.log(gameCounter);

// study pre and post ++ operators on mdn