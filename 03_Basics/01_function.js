// functions in js

function sayMyName(){
    console.log("Print in JS");
    console.log("JS Func");
    //console.log("Print in JS");
}

// sayMyName()

// function addTwoNum(no1, no2){ // parameters in js
//     console.log(no1 + no2);
// }

function addTwoNum(no1, no2){ // parameters in js
    // console.log(no1 + no2);
    // let res = no1 + no2;
    // return res;
    // console.log(" unreachable code"); 
    return no1 + no2
}

// addTwoNum(10, 20); // passing different arguments
// addTwoNum(10, "12");
// addTwoNum(10, "a"); 

const result = addTwoNum(5, 3); // func didn't return answer here in only line 12 
// console.log("Result : ", result); // undefined value if not returned value line 12

// function loginUserMessage(username) {
//     // console.log(`${username} is Logged In!`);
//     if(!username){ //username === undefined
//         console.log("Please enter user name");
//         return
//     }
//     return `${username} logged in!`;
// }

function loginUserMessage(username = "Sam"){ // func with default argumets!
    return `${username} logged IN`;
}

// console.log(loginUserMessage("Pradeep")); // Pradeep logged in!
// console.log(loginUserMessage()); // undefined logged in!


// rest operator to transfer multiple values in a single argument
// passing multiple values at once
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(100, 200, 300));
// console.log(calculateCartPrice(100, 20.0, 5000 , 23.5));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(100, 456, 526, 200, 300));

// how send object in function

const user = {
    username: "Pradeep",
    //id: 138 
    ids: 125
}

function handleObject(anyobject){
    console.log(`User is ${anyobject.username} and id is ${anyobject.id}`);
}

// handleObject(user)  // for ids: itwill be undefined.

// passing direct obj
handleObject({
    username: "ABC",
    id: 124
})

const myNewArray = [200, 400, 100, 800]

function returnSecondVal(getArray){
    return getArray[1]
}

console.log(returnSecondVal(myNewArray)); 

console.log(returnSecondVal([500, 230, 512]));