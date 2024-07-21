// Truthy and Falsy Values in JavaScript

// Falsy values in JavaScript
const falsyValues = [
  false, // Boolean value representing false
  0, // Numeric zero
  -0, // Negative zero, considered falsy
  0n, // BigInt zero
  "", // An empty string
  null, // Represents a non-existent value
  undefined, // Indicates that a variable has not been assigned a value
  NaN, // Represents "Not-a-Number", which is not a valid number
];

// Checking and logging falsy values
console.log("Checking Falsy Values:");
falsyValues.forEach((value) => {
  // Explanation: `!value` converts the value to its boolean negation.
  // If it evaluates to true, it means the original value is falsy.
  if (!value) {
    console.log(`${String(value)} is falsy`); // Logs each falsy value
  }
});

console.log("\n");

// Truthy values in JavaScript
const truthyValues = [
  "0", // A non-empty string containing the character zero
  "false", // A non-empty string with the word "false"
  " ", // A non-empty string containing a space
  1, // A non-zero number
  -1, // A negative non-zero number
  3.14, // A non-zero decimal number
  1n, // BigInt non-zero value
  [], // An empty array, which is considered truthy
  {}, // An empty object, which is considered truthy
  function () {}, // A function, which is always truthy
];

// Checking and logging truthy values
console.log("Checking Truthy Values:");
truthyValues.forEach((value) => {
  // Explanation: `value` is checked directly in the if condition.
  // If it evaluates to true, it means the value is truthy.
  if (value) {
    console.log(`${String(value)} is truthy`); // Logs each truthy value
  }
});
