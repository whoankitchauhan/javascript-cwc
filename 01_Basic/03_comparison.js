// Comparison Operators in JavaScript

// Basic Comparisons
// These operators compare two values and return a boolean value (true or false).

console.log(2 > 1); // true (2 is greater than 1)
console.log(2 >= 1); // true (2 is greater than or equal to 1)
console.log(2 < 1); // false (2 is not less than 1)
console.log(2 == 1); // false (2 is not equal to 1)
console.log(2 != 1); // true (2 is not equal to 1)

// Comparisons with Type Coercion
// JavaScript attempts to convert different types to a common type before comparison.

console.log("2" > 1); // true (string "2" is converted to number 2)
console.log("02" > 1); // true (string "02" is converted to number 2)

// Comparisons with null and undefined
// These special values have unique behavior in comparisons.

console.log(null > 0); // false (null is converted to 0)
console.log(null == 0); // false (null is only loosely equal to undefined)
console.log(null >= 0); // true (null is converted to 0)

console.log(undefined == 0); // false (undefined is only loosely equal to null)
console.log(undefined > 0); // false (undefined is converted to NaN, and NaN is not greater than 0)
console.log(undefined < 0); // false (undefined is converted to NaN, and NaN is not less than 0)

// Strict Equality (===)
// This operator compares both value and type, without type coercion.

console.log("2" === 2); // false (string "2" and number 2 are different types)

// Additional Examples and Explanations

// Loose Equality (==)
// This operator compares values after converting them to a common type.

console.log(2 == "2"); // true (string "2" is converted to number 2)
console.log(0 == false); // true (false is converted to 0)
console.log(null == undefined); // true (null and undefined are loosely equal)

// Inequality (!= and !==)
// These operators check if values are not equal.

console.log(2 != "2"); // false (string "2" is converted to number 2, and they are equal)
console.log(2 !== "2"); // true (different types: number and string)

// Comparing with NaN
// NaN (Not a Number) is a special value that is not equal to anything, including itself.

console.log(NaN == NaN); // false (NaN is not equal to anything, including NaN)
console.log(NaN === NaN); // false (NaN is not strictly equal to anything, including NaN)
console.log(Number.isNaN(NaN)); // true (use Number.isNaN to check if a value is NaN)

// Best Practices
// Use === and !== for comparisons to avoid unexpected type coercion.
// Be cautious when comparing with null and undefined.
// Understand the behavior of NaN in comparisons.

// Example of using === for strict comparison
let a = "10";
let b = 10;

console.log(a == b); // true (loose equality with type coercion)
console.log(a === b); // false (strict equality without type coercion)

// Example of comparing with null and undefined
let x = null;
let y;

console.log(x == y); // true (null and undefined are loosely equal)
console.log(x === y); // false (different types: null and undefined)

 /*
Notes:

Basic Comparisons: >, >=, <, <=, ==, !=
Type Coercion: Automatic conversion of types during comparison (e.g., "2" > 1)
null and undefined: Special values with unique comparison behavior
Strict Equality (===): Compares both value and type, avoiding type coercion
Loose Equality (==): Converts values to a common type before comparison
NaN: Special value not equal to anything, use Number.isNaN to check for NaN
Best Practices: Prefer === and !==, be cautious with null and undefined, and understand NaN comparisons
*/
