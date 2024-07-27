// objects in js
/**
 * Two ways to declare an object in js
 * One is as Literal 
 * another is as constructor
 */

// onject literals
// keys are generally string, values can be of any datatype

const mySym = Symbol("KeySymbol")

const jsUser = {
    name: "Pradeep",
    age: 30,
    "full name": "Pradeep Ubale Patil",
    location: "Sambhajinagar",
    email: "pradeep01@github.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1" // use symbol key in square bracket
    // mySym: "mykey1"  => return as string not symbol
}

// console.log(jsUser.email); // OR more preferable
// console.log(jsUser["name"]);

// always use [""] for this type of key
// console.log(jsUser["full name"]); 

// don't use symbol as this
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym); // returns string not Symbol which is wrong

// use Symbol like this
// console.log(jsUser[mySym]); //no need of "" for key
// In obj [Symbol9KeySymbol]: 'myKey'
// console.log(typeof jsUser[mySym]); 

// Change value of an object
// jsUser.email = "the@pradeep.com"

// to freeze the object so you can't change properties of an object, you can use 
// Object.freeze(jsUser)

// jsUser.email = "abc@xyz.com"
// console.log(jsUser);

// In js functions are first class citizens
// you can use them as variables also.
// Unfreeze the object first before executing it.
jsUser.greeting = function(){
    console.log("Hello JS USER");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${jsUser.name} and age is ${jsUser["age"]}`);
    console.log(`Another way is ${this["email"]}`);
    // use below one for obj ref i.e. this
    console.log(`let's print city: ${this.location}`);
}

// console.log(jsUser.greeting); // => function(anonymous)
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


// ++++++++++++++++++++++++++++++++++++++++++++++

// Singleton -> when declare as constructor, only single instance
// Object.create