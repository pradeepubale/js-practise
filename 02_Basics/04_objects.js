// Singleton -> when declare as constructor, only single instance
// Object.create
// Singleton obj here
const appUser = new Object()

// non singleton obj
// const appUser1 = {}

appUser.name = "Spike Spiegel"
appUser.id = "cb1999"
appUser.isLoggedIn = false

// console.log(appUser);

// nested objects
const regularUser = {
    email: "regular_user@appname.com",
    fullname: {
        userFullName: {
            firstName: "Pradeep",
            lastName: "Ubale"
        }
    }
}

// console.log(regularUser);
// console.log("++++++++++++++++");
// console.log(regularUser.fullname);
// console.log("++++++++++++++++");
// console.log(regularUser.fullname.userFullName);
// console.log("++++++++++++++++");
// console.log(regularUser.fullname.userFullName.firstName);
// here we used optional chaining also with ? used in api and other server data's (for protection) to check wheather it exists or not
// console.log(regularUser.fullname?.userFullName?.firstName);

// merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // but it will create object within object like an array

// prefer it
// const obj3 = Object.assign({}, obj1, obj2)  // not this=> Object.assign(obj1, obj2) gives same result

// but best one is spread operator ...
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// but mostly we receive data from DB as an array of objects

const users = [
    {
        id: 1,
        email: "abc@xyz.co"
    },
    {
        id: 2,
        email: "a@xyz.co"
    },
    {
        id: 3,
        email: "ab@xyz.co"
    }
]

console.log(users[1].email);

console.log(appUser);

// create array of object keys V IMP
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));// create array of key value pairs. used rarely

console.log(appUser.hasOwnProperty('isLoggedIn'));