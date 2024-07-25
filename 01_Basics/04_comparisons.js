// Basic comparison operators

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // here string is converted implicitely(automatically) to number
// console.log("02" > 1); // here also

/**
 * JS treats it differently
 * an equality == and comparisons >, <, >=,<= works differently
 * comparisons convert null to a number (i.e. 0)
 *   
 */
// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);

// never used above 👆 comparisons; use clean code

console.log(null == undefined);
console.log(null > undefined);

// compare value with data type
console.log("2" == 2); // true
console.log("2" === 2); // false