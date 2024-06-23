// Array Operations in JavaScript

// Creating arrays
const numbersArray = [0, 1, 2, 3, 4, 5];
const heroesArray = ["shaktiman", "naagraj"];

const anotherNumbersArray = new Array(1, 2, 3, 4);
console.log(numbersArray[1]); // Output: 1

// Array methods

// Adding elements to the end of the array
numbersArray.push(6);
numbersArray.push(7);
console.log(numbersArray); // Output: [0, 1, 2, 3, 4, 5, 6, 7]

// Removing the last element from the array
numbersArray.pop();
console.log(numbersArray); // Output: [0, 1, 2, 3, 4, 5, 6]

// Adding elements to the beginning of the array
numbersArray.unshift(9);
console.log(numbersArray); // Output: [9, 0, 1, 2, 3, 4, 5, 6]

// Removing the first element from the array
numbersArray.shift();
console.log(numbersArray); // Output: [0, 1, 2, 3, 4, 5, 6]

// Checking if an element exists in the array
console.log(numbersArray.includes(9)); // Output: false

// Finding the index of an element in the array
console.log(numbersArray.indexOf(3)); // Output: 3

// Joining array elements into a string
const joinedArray = numbersArray.join(", ");
console.log(joinedArray); // Output: 0, 1, 2, 3, 4, 5, 6

// Converting array to string
const arrayToString = numbersArray.toString();
console.log(arrayToString); // Output: 0,1,2,3,4,5,6

// Iterating through an array using forEach
numbersArray.forEach((num) => {
  console.log(num); // Output: each number in the array
});

// Mapping an array to a new array
const mappedArray = numbersArray.map((num) => num * 2);
console.log(mappedArray); // Output: [0, 2, 4, 6, 8, 10, 12]

// Filtering an array
const filteredArray = numbersArray.filter((num) => num > 3);
console.log(filteredArray); // Output: [4, 5, 6]

// Reducing an array to a single value
const sum = numbersArray.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 21

// Slice and Splice Methods

// Slice method - returns a shallow copy of a portion of an array
console.log("Original Array: ", numbersArray);

const slicedArray = numbersArray.slice(1, 3);
console.log("Sliced Array: ", slicedArray); // Output: [1, 2]
console.log("After Slice: ", numbersArray); // Output: [0, 1, 2, 3, 4, 5, 6]

// Splice method - changes the contents of an array by removing or replacing existing elements
const splicedArray = numbersArray.splice(1, 3);
console.log("Spliced Array: ", splicedArray); // Output: [1, 2, 3]
console.log("After Splice: ", numbersArray); // Output: [0, 4, 5, 6]

// Merging Arrays

const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// Using spread operator to merge arrays
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes); // Output: ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

// Flattening nested arrays

const nestedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Array utility methods

// Checking if a value is an array
console.log(Array.isArray("Ankit Chauhan")); // Output: false
console.log(Array.isArray(heroesArray)); // Output: true

// Creating an array from a string
console.log(Array.from("Ankit")); // Output: ['A', 'n', 'k', 'i', 't']

// Creating an array from an object (uncommon use case)
console.log(Array.from({ name: "Ankit Chauhan" })); // Output: []

// Creating an array from a set of values
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]

// Finding an element in an array using find
const foundHero = marvelHeroes.find((hero) => hero === "thor");
console.log(foundHero); // Output: thor

// Finding the index of an element in an array using findIndex
const foundHeroIndex = marvelHeroes.findIndex((hero) => hero === "thor");
console.log(foundHeroIndex); // Output: 0

// Checking if all elements in an array pass a test using every
const areAllNumbersPositive = numbersArray.every((num) => num >= 0);
console.log(areAllNumbersPositive); // Output: true

// Checking if some elements in an array pass a test using some
const isAnyNumberGreaterThanFive = numbersArray.some((num) => num > 5);
console.log(isAnyNumberGreaterThanFive); // Output: true

// Sorting an array
const unsortedArray = [3, 1, 4, 1, 5, 9];
const sortedArray = unsortedArray.sort((a, b) => a - b);
console.log(sortedArray); // Output: [1, 1, 3, 4, 5, 9]

// Reversing an array
const reversedArray = sortedArray.reverse();
console.log(reversedArray); // Output: [9, 5, 4, 3, 1, 1]

// Filling an array with a static value
const filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]

// Removing duplicates from an array using Set
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Summary of Important Array Methods
// - `push()`: Adds elements to the end of the array
// - `pop()`: Removes the last element from the array
// - `unshift()`: Adds elements to the beginning of the array
// - `shift()`: Removes the first element from the array
// - `includes()`: Checks if an array contains a certain element
// - `indexOf()`: Returns the first index at which a given element can be found
// - `join()`: Joins all elements of an array into a string
// - `toString()`: Converts an array to a string
// - `forEach()`: Executes a provided function once for each array element
// - `map()`: Creates a new array with the results of calling a provided function on every element in the calling array
// - `filter()`: Creates a new array with all elements that pass the test implemented by the provided function
// - `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value
// - `slice()`: Returns a shallow copy of a portion of an array
// - `splice()`: Adds/removes elements from an array
// - `concat()`: Merges two or more arrays
// - `flat()`: Flattens a nested array
// - `Array.isArray()`: Checks if a value is an array
// - `Array.from()`: Creates an array from an array-like or iterable object
// - `Array.of()`: Creates a new array from a set of arguments
// - `find()`: Returns the value of the first element in the array that satisfies the provided testing function
// - `findIndex()`: Returns the index of the first element in the array that satisfies the provided testing function
// - `every()`: Tests whether all elements in the array pass the provided function
// - `some()`: Tests whether at least one element in the array passes the provided function
// - `sort()`: Sorts the elements of an array in place and returns the sorted array
// - `reverse()`: Reverses the elements of an array in place
// - `fill()`: Fills all the elements of an array from a start index to an end index with a static value
// - `Set()`: Removes duplicate values from an array
