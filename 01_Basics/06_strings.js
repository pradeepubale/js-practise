const name = "Hello "
const name1 = "World"

// Old style of strings
// console.log(name + name1 + " !!!");

// new syntax is with `` backticks (str interpolation)
console.log(`${name} This is Brave new ${name1}`);

// another way to declare string(new)
// has properties and methods
const userName = new String('WhiteRabbit');
const userOne = new String('Neo');

// console.log(userOne[0]);
// console.log(userName.__proto__);

// console.log(userName.length);
// console.log(userOne.length);
// console.log(userOne.toUpperCase());
// console.log(userName.charAt(2));
// console.log(userName.indexOf('t'));

const subStr = userName.substring(0, 5)
console.log(subStr);

const str2 = userName.slice(-8, 4)
console.log(str2);

const str3 = "    Eren     "
console.log(str3);
console.log(str3.trim());

const url = "https://xyz.com/some%20page"
console.log(url.replace('%20', '-'));
console.log(url.includes('com'));

const arrstr = "one-two-three"

console.log(arrstr.split('-'));
// strings are very imp in any language also used in pattern matching
// Practising string is very imp