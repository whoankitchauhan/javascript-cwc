// *********************** Primitive Types ***********************

// JavaScript has seven primitive data types:
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

// String
const name = "Ankit"; // A sequence of characters

// Number
const score = 100; // An integer
const scoreValue = 100.3; // A floating-point number

// Boolean
const isLoggedIn = false; // Represents true or false

// null
const outsideTemp = null; // Represents the intentional absence of any object value

// undefined
let userEmail; // A variable that has been declared but not assigned a value

// Symbol
const id = Symbol("123"); // A unique and immutable primitive value
const anotherId = Symbol("123"); // Symbols with the same description are different
console.log(id === anotherId); // false (each Symbol is unique)

// BigInt
const bigNumber = 3456543576654356754n; // For integers larger than the Number type can safely represent

// *********************** Reference Types (Non-primitive) ***********************

// Reference types are objects that are stored by reference, not by value. The most common reference types are:
// 1. Array
// 2. Object
// 3. Function

// Array
const heros = ["shaktiman", "naagraj", "doga"]; // An ordered collection of values
console.log(heros); // ["shaktiman", "naagraj", "doga"]

// Object
let myObj = {
  name: "Hitesh", // Properties with key-value pairs
  age: 22,
};
console.log(myObj); // { name: 'Hitesh', age: 22 }

// Function
const myFunction = function () {
  console.log("Hello world"); // A block of code designed to perform a particular task
};
myFunction(); // Prints "Hello world"

// *********************** Additional Concepts ***********************

// Checking Types
// Using `typeof` to check the type of a variable:

console.log(typeof name); // "string"
console.log(typeof score); // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof outsideTemp); // "object" (null is an object type due to a legacy bug)
console.log(typeof userEmail); // "undefined"
console.log(typeof id); // "symbol"
console.log(typeof bigNumber); // "bigint"
console.log(typeof heros); // "object"
console.log(typeof myObj); // "object"
console.log(typeof myFunction); // "function"

// *********************** Immutable and Mutable ***********************

// Primitive types are immutable (cannot be changed).
// Reference types are mutable (can be changed).

// Immutable example
let str = "Hello";
str[0] = "h"; // This won't change the string
console.log(str); // "Hello"

// Mutable example
let arr = [1, 2, 3];
arr[0] = 99; // This will change the array
console.log(arr); // [99, 2, 3]
