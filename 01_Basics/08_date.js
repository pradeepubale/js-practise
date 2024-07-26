/**
 * Date has been a long-standing pain point in ECMAScript
 * Documentation Link:
 * https://tc39.es/proposal-temporal/docs/
 */


// dates in JS this time

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// here month starts with  0      👇 
let myCreatedDate = new Date(2024, 0, 24)
// console.log(myCreatedDate.toDateString());

let date01 = new Date(2023, 1, 27, 5, 55)
// console.log(date01.toLocaleString());

// yyyy mm dd format        👇 starts with 01
// let date02 = new Date("2024-01-17")
let date02 = new Date("02-20-2024") // mm dd yyyy
// console.log(date02.toLocaleString());



// Timestamp

// used to create polls, quizes, fastest answers
// login logout times etc.

let myTimeStamp = Date.now() // can wright with 'new' also

// compare 2 dates in milisecs for reservation or booking apps
// console.log(myTimeStamp); // time in ms from 1 jan 1970
// console.log(date02.getTime());

// to calculate milisec to sec
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // starts with 0
console.log(newDate.getDay()); // starts from monday

// we can write with string interpolation
console.log(`Todays is ${newDate.toLocaleString()}`);

let someday = newDate.toLocaleString('default', {
    weekday: "long",
    timeZoneName: "long",
    month: "long",
})
console.log(someday);