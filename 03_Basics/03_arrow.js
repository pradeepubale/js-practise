// this means or refers to current context

const user = {
    username: "Pradeep",
    uid: 100,
    welcomeMsg: function(){
        console.log(`Welcome ${this.username}, Your id is ${this.uid}`);
        console.log(this); // lets see what is current context here.
        
    }
}

// lets run above obj's function
// user.welcomeMsg()

// lets change context (i.e. values hold by the variables)
// user.username = "vishal"
// user.uid = 107
// user.welcomeMsg()

// console.log(this);  // when only run current context gives {} empty obj in node environment
// where as in browser the global object is Window object

// function chai(){
//     // console.log(this); // gives a lot of info
//     let username = "ABC"
//     console.log(this.username); // undefined 
//     // bcoz context works in objects but not works in function
// }

// chai()

// const chai = function () {
//     let username = "ABC"
//     console.log(this.username); // undefined 
// }

// Arrow function
const chai = () => {
    let username = "ABC"
    console.log(this.username); // undefined in arrow fun also
    console.log(this); // {}
    
}

// can't use this in arrow fun and normal func
// chai()


// BASIC Arrow func with expplicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(12, 7));

// Implicit return arrow function (No return, No brackets)
// if you wrap your function in curly braces then you have to write return keyword.

// const addTwo = (num1, num2) => num1 + num2 // OR 

// const addTwo = (num1, num2) => (num1 + num2)  // used heavily in react

// Even to return object we have to wrap {} inside the ()

const addTwo = (n1, n2) => ({username: "Pradeep"})
console.log(addTwo(50, 27)); // returns object { username: 'Pradeep' }