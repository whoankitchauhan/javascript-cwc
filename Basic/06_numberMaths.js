// Basic Number Operations

const userScore = 400;
// Log the score to the console
console.log(userScore); // Output: 400

const accountBalance = new Number(100);
// Convert number to string and get its length
console.log(accountBalance.toString().length); // Output: 3

// Fixed-point notation with 1 decimal place
console.log(accountBalance.toFixed(1)); // Output: 100.0

const floatingNumber = 123.8966;
// Precision of 4 significant digits
console.log(floatingNumber.toPrecision(4)); // Output: 123.9

const largeNumber = 1000000;
// Convert number to a localized string format
console.log(largeNumber.toLocaleString("en-IN")); // Output: 10,00,000

// +++++++++++++ Maths Operations +++++++++++++++++++++++++++++

console.log(Math); // Output: Math object

// Absolute value
console.log(Math.abs(-4)); // Output: 4

// Round to the nearest integer
console.log(Math.round(4.6)); // Output: 5

// Round up to the nearest integer
console.log(Math.ceil(4.2)); // Output: 5

// Round down to the nearest integer
console.log(Math.floor(4.9)); // Output: 4

// Minimum of several numbers
console.log(Math.min(4, 3, 6, 8)); // Output: 3

// Maximum of several numbers
console.log(Math.max(4, 3, 6, 8)); // Output: 8

// Generating random numbers
// Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: Random number between 0 and 1

// Random number between 1 and 10 (inclusive)
console.log(Math.random() * 10 + 1); // Output: Random number between 1 and 10

// Random integer between 1 and 10 (inclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Output: Random integer between 1 and 10

// Random integer between a given range (min and max inclusive)
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Output: Random integer between 10 and 20

// Additional Math Methods
// Square root
console.log(Math.sqrt(16)); // Output: 4

// Exponentiation
console.log(Math.pow(2, 3)); // Output: 8

// Logarithm (base 10)
console.log(Math.log10(100)); // Output: 2

// Trigonometric functions
console.log(Math.sin(Math.PI / 2)); // Output: 1
console.log(Math.cos(0)); // Output: 1

// Summary of Important Math Methods
// - Absolute value: `Math.abs(x)`
// - Rounding: `Math.round(x)`, `Math.ceil(x)`, `Math.floor(x)`
// - Minimum and Maximum: `Math.min(a, b, ...)`, `Math.max(a, b, ...)`
// - Random numbers: `Math.random()`, `Math.floor(Math.random() * (max - min + 1)) + min`
// - Square root: `Math.sqrt(x)`
// - Exponentiation: `Math.pow(base, exponent)`
// - Logarithm: `Math.log10(x)`
// - Trigonometry: `Math.sin(x)`, `Math.cos(x)`, `Math.tan(x)`
