/**  Difference of data types is made on the basis of how they stored in memory and how we access the data.
 * Two types Primitive
 * and Non Primitive or reference type
 * 
 * Remember JS is dynamically typed language
*/

// Primitive call by value changes made on the copy instead of original
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt(for scientific)

const name = "Pradeep"
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let user; // undefined

// Symbol
const id = Symbol('abc') // creates unique symbol
const anotherId = Symbol('abc')

// console.log(id === anotherId); // false

// bigint
const bigNumber = 1234567896543215684n


// Reference or non primitive

// Array, Objects, Functions

//arrays
const computer = ["cpu", "keyboard", "mouse", "monitor"];

// objects
/**
 * whatever we define within {} brackets is object
 * datatype can be anything string, number, boolean, 
 * array, function or even object also.
 */
let myObj = {
    name: "ABC",
    age: 25,
}

// lets define a function as a variable
const myFunction = function(){
    console.log("Hello World");
}


// typeof(val) => value
// number => number
// string => string
// boolean => boolean

console.log(typeof id); // symbol => Symbol
console.log(typeof bigNumber); // bigInt
console.log(typeof outsideTemp); // null => object
console.log(typeof user); // undefined => undefined
console.log(typeof myObj); // object => object
console.log(typeof myFunction); // function => (object)function
console.log(typeof computer); // array = > object

// https://262.ecma-international.org/5.1/#sec-11.4.3