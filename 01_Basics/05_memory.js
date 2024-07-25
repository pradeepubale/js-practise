//+++++++++++++++++ Stack and Heap Memory in JS ++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let spiderMan = "Peter Parker"
let anotherSpidey = spiderMan

console.log("+++++++++++++++++++++++++++++");
console.log(spiderMan);
console.log(anotherSpidey);

anotherSpidey = "Mike Morales"
console.log("here comes the change");
console.log(spiderMan);
console.log(anotherSpidey);

let userOne = {
    email: "abc@google.com",
    upi: "xyz@ybl"
}

let userTwo = userOne

userTwo.email = "xyz@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email); //here both reference to same memory