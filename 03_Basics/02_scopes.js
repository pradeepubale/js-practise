// global scope
let a = 200
// const b = 20
// var c = 30  // always avoid it.

if (true){
    // local scope
    let a = 10
    const b = 20
    // c = 30    // default is var
    // console.log("Inside local scope: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c); // var is global

// scope level
function one() {
    const userName = "Pradeep";

    function two() {
        const website = "YouTube";
        console.log(userName);
    }
    // child func can access parents var called closure

    // console.log(website); // local value can't used outside scope
    //two() // not print bcoz not called
}

// one() // by calling one we can't automatically call two.

if (true) {
    const user = "ABC";
    if (user === "ABC") {
        const site = " duckduckgo";
        // console.log(user + site);
    }
    // console.log(site); // ERROR
}

// console.log(user); // ERROR

// +++++++++++++++++++++++++++++ Interesting part +++

console.log(addOne(5)); // 6

// here it is a function so we can call it first
function addOne(num) {
    return num + 1    
}

// console.log(addOne(5)); // ans => 6


// console.log(addTwo(7)); // Cannot access 'addTwo' before initialization
// but here we cant do it bcoz it is assigned to variable also 
// also study in Hoisting

const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5)); // 7