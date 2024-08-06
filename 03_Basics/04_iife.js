// Immediately Invoked Function Expressions (IIFE)
// used to remove pollution created by the global scope declarations.
// it is used to execute things immediately

// normal function
function tea(){
    console.log(`DB Connected!`);
}
// tea() // manually immediately invoked

// This will also immediately invoked due to func inside ()
// just put normal func inside () to make it iife

(function tea(){
    // Named IIFE
    console.log(`DB Connected!`);
})();  // if semicolon not given then it will throw error if another iife used below immediately


// here first () contain func definition, and second () is for execution. : i.e. ()()

( function coffee() {
    // named iife coffee
    console.log(`DATA DATA`);
} )(); // again semicolon for another arrow iife


// arrow function iife
( () => {
    console.log(`DB CREATED Successfully !`);
} )();

// with argument
((username) => {
    console.log(`Hello ${username} .`);
})('Pradeep')