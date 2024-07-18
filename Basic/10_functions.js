// Function to log each letter of a name
function sayMyName() {
  console.log("A");
  console.log("N");
  console.log("K");
  console.log("I");
  console.log("T");
}

sayMyName(); // Output: A N K I T

// Function to add two numbers and return the result
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(3, 5);
console.log("Sum:", sum); // Output: Sum: 8

// Function to return a login message for a user with a default username
function getUserLoginMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(getUserLoginMessage("Ankit")); // Output: Ankit just logged in
console.log(getUserLoginMessage()); // Output: Sam just logged in

// Function to calculate cart price and return additional prices as an array
function getCartAdditionalPrices(price1, price2, ...additionalPrices) {
  console.log("Price 1:", price1);
  console.log("Price 2:", price2);
  console.log("Additional Prices:", additionalPrices);
  return additionalPrices;
}

console.log(getCartAdditionalPrices(100, 200, 300, 400, 500, 2000));
/*
Output : 
Price 1: 200
Price 2: 400
Additional Prices: [ 300, 400, 500, 2000 ]
*/

// Object representing a user
const userObject = {
  username: "Ankit",
  price: 199,
};

// Function to handle a user object and log its properties
function displayUserDetails(user) {
  console.log(`Username is ${user.username} and price is ${user.price}`);
}

displayUserDetails(userObject); // Output: Username is Ankit and price is 199
displayUserDetails({
  username: "Sam",
  price: 399,
}); // Output: Username is Sam and price is 399

// Array of prices
const pricesArray = [200, 400, 100, 600];

// Function to return the second value of an array
function getSecondArrayValue(array) {
  return array[1];
}

console.log(getSecondArrayValue(pricesArray)); // Output: 400
console.log(getSecondArrayValue([900, 300, 500, 1000])); // Output: 300

// Function to greet a user with optional parameters
function greetUser(greeting = "Hello", name = "User") {
  return `${greeting}, ${name}!`;
}

console.log(greetUser()); // Output: Hello, User!
console.log(greetUser("Hi", "Ankit")); // Output: Hi, Ankit!

// Function to calculate the square of a number
function squareNumber(num) {
  return num * num;
}

const squared = squareNumber(4);
console.log("Squared:", squared); // Output: Squared: 16

// Function to find the maximum number in an array
function findMaxNumber(numbers) {
  return Math.max(...numbers);
}

const maxNumber = findMaxNumber([10, 20, 30, 40, 50]);
console.log("Max Number:", maxNumber); // Output: Max Number: 50

// Function to convert a string to uppercase
function toUpperCase(str) {
  return str.toUpperCase();
}

const upperCaseString = toUpperCase("hello world");
console.log("Uppercase String:", upperCaseString); // Output: Uppercase String: HELLO WORLD

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
// The split("") method splits the string into an array of individual characters.
// The reverse() method reverses the elements of the array.
// The join("") method joins all the elements of the array into a single string.

const reversedString = reverseString("JavaScript");
console.log("Reversed String:", reversedString); // Output: tpircSavaJ

// Function to check if a number is even
function isEvenNumber(num) {
  return num % 2 === 0;
}

const isEven = isEvenNumber(8);
console.log("Is Even:", isEven); // Output: true

// Function to sum all numbers in an array
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const totalSum = sumArray([1, 2, 3, 4, 5]);
console.log("Total Sum:", totalSum); // Output: 15

// Function to get the length of a string
function getStringLength(str) {
  return str.length;
}

const lengthOfString = getStringLength("JavaScript");
console.log("String Length:", lengthOfString); // Output: 10

// Function to return the factorial of a number
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

const fact = factorial(5);
console.log("Factorial:", fact); // Output: 120

// Function to return the square root of a number
function squareRoot(num) {
  return Math.sqrt(num);
}

const sqrt = squareRoot(16);
console.log("Square Root:", sqrt); // Output: 4

// Function to format a date
function formatDate(date) {
  return date.toDateString();
}

const formattedDate = formatDate(new Date());
console.log("Formatted Date:", formattedDate); // Output: Mon Jul 14 2024

// Function to convert an array to a string
function arrayToString(array) {
  return array.join(", ");
}

const arrayString = arrayToString([1, 2, 3, 4, 5]);
console.log("Array String:", arrayString); // Output: 1, 2, 3, 4, 5

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const capitalizedString = capitalizeFirstLetter("javascript");
console.log("Capitalized String:", capitalizedString); // Output: Javascript

// Function to merge two arrays
function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}

const mergedArray = mergeArrays([1, 2], [3, 4]);
console.log("Merged Array:", mergedArray); // Output: [1, 2, 3, 4]

/*
Explanations:
- sayMyName: Logs each letter of the name "ANKIT" to the console.
- addTwoNumbers: Takes two numbers as input, adds them, and returns the sum.
- getUserLoginMessage: Takes a username as input (default is "sam") and returns a login message. If no username is provided, it asks for one.
- getCartAdditionalPrices: Takes two fixed prices and any number of additional prices, returning the additional prices as an array.
- displayUserDetails: Takes a user object as input and logs the username and price properties.
- getSecondArrayValue: Takes an array as input and returns the second value.
- greetUser: Greets a user with optional greeting and name parameters.
- squareNumber: Calculates the square of a number.
- findMaxNumber: Finds the maximum number in an array.
- toUpperCase: Converts a string to uppercase.
- reverseString: Reverses a string.
- isEvenNumber: Checks if a number is even.
- sumArray: Sums all numbers in an array.
- getStringLength: Gets the length of a string.
- factorial: Returns the factorial of a number.
- squareRoot: Returns the square root of a number.
- formatDate: Formats a date to a readable string.
- arrayToString: Converts an array to a string.
- capitalizeFirstLetter: Capitalizes the first letter of a string.
- mergeArrays: Merges two arrays into one.
*/
