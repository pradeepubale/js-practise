// arrays

const marvel_heroes = ["Peter Parker", "Steve Roger", "tony stark"]
const dc_heroes = ["clark kent", "Bruce Wayne", "arthur fleck"]

// array push

// marvel_heroes.push(dc_heroes)
// push whole array as an element

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// array concat (we have store result in new array)
const all_heroes = marvel_heroes.concat(dc_heroes)

// console.log(all_heroes);

// spread operator [...] ex. spread of glass water
// all elements of array spread becomes individual
// Use spread instead of concat
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

// flatenning nested arrays
const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]];
// convert nested arrays into one single dimension array
// flat() default is 1, & 2 => level 2 OR Use Infinity for multiple levels
const flat_array = another_array.flat(Infinity) //another_array.flat(2)

// console.log(flat_array); determines whether the passed value is an Array

// returns in true or false
// console.log(Array.isArray("Pradeep"));
// Array.from use to create an array
// console.log(Array.from("Pradeep"));
console.log(Array.from({name: "Hello"})); // return empty array bcoz it doesn't know to create it from key or value of an obj

let score1 = 100, score2 = 200, score3 = 300
// Array.of : creates a new Array instance from a variable number of arguments, regardless its type
console.log(Array.of(score1, score2, score3));

console.log(Array.of(10, 'abc', 3.14, true));