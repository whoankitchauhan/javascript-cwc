// Nullish Coalescing Operator (??):
// The Nullish Coalescing Operator (??) is used to provide a default value when the left-hand operand is null or undefined.
// Unlike the logical OR (||) operator, which considers all falsy values (e.g., 0, '', NaN) as triggers for the default value,
// the nullish coalescing operator only considers null and undefined.
// This makes it useful for cases where you want to provide a fallback value for potentially undefined or null variables,
// without affecting other falsy values like 0 or false.

// Basic Usage
let username;
let defaultUsername = "Guest";

// If username is null or undefined, defaultUsername is used
let displayName = username ?? defaultUsername;

console.log(displayName); // Output: "Guest"

// Comparison with Logical OR (`||`)
let count = 0;
let defaultCount = 10;

// Logical OR considers 0 as a falsy value and uses defaultCount
let finalCountOr = count || defaultCount;

console.log(finalCountOr); // Output: 10 (because 0 is a falsy value)

// Nullish Coalescing Operator does not consider 0 as nullish
let count2 = 0;
let defaultCount2 = 10;

let finalCountNullish = count2 ?? defaultCount2;

console.log(finalCountNullish); // Output: 0 (because 0 is not nullish)

// Multiple Default Values
let firstName = null;
let lastName = undefined;
let defaultName = "Anonymous";

// Chaining default values with ??
let fullName = firstName ?? lastName ?? defaultName;

console.log(fullName); // Output: "Anonymous"

// Practical Example with Function Parameters
function greet(userName = "Guest") {
  console.log(`Hello, ${userName}!`);
}

greet(); // Output: "Hello, Guest!" (using default parameter)

// Using Nullish Coalescing Operator to provide default values
function greet2(userName) {
  // Set default name if userName is null or undefined
  const name = userName ?? "Guest";
  console.log(`Hello, ${name}!`);
}

greet2(); // Output: "Hello, Guest!" (using default value from ??)
greet2(null); // Output: "Hello, Guest!" (null triggers default value)
greet2("Alice"); // Output: "Hello, Alice!" (provided value is used)

// Explanation:
// - The Nullish Coalescing Operator (??) is used to provide default values for null or undefined variables.
// - Unlike logical OR (||), it does not consider other falsy values like 0, NaN, "", or false as nullish.
// - Useful in cases where you want to ensure a variable has a meaningful default value only when it is truly null or undefined.
