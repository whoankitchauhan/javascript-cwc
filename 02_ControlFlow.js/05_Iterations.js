// JavaScript Iteration Techniques and Control Flow Examples

// 1. For Loop Example: Calculating the Sum of Numbers from 1 to 10
console.log("For Loop Example: Calculating the Sum of Numbers from 1 to 10");

let totalSum = 0;
for (let i = 1; i <= 10; i++) {
  totalSum += i;
  if (i === 5) {
    console.log("Reached halfway point at 5");
  }
}
console.log(`Total sum from 1 to 10 is: ${totalSum}`);
// Explanation:
// The for loop runs from 1 to 10, adding each number to `totalSum`.
// When `i` equals 5, it logs a message indicating the halfway point.

// 2. Nested For Loop Example: Multiplication Table for 1 to 3
console.log("\nNested For Loop Example: Multiplication Table for 1 to 3");

for (let num = 1; num <= 3; num++) {
  console.log(`Multiplication table for ${num}`);
  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(`${num} * ${multiplier} = ${num * multiplier}`);
  }
}
// Explanation:
// Demonstrates a nested loop where the outer loop runs from 1 to 3,
// and the inner loop runs from 1 to 10 to print a multiplication table.

// 3. Array Iteration with For Loop: Listing Employee Names
console.log("\nArray Iteration with For Loop: Listing Employee Names");

let employees = ["Ankit", "Bobby", "Chetan"];
for (let index = 0; index < employees.length; index++) {
  const employee = employees[index];
  console.log(`Employee name: ${employee}`);
}
// Explanation:
// Iterates over an array of employee names and prints each name.

// 4. Break Statement in For Loop: Finding the First Odd Number Greater Than 5
console.log(
  "\nBreak Statement in For Loop: Finding the First Odd Number Greater Than 5"
);

let numberArray = [2, 4, 6, 8, 9, 10, 11];
for (let index = 0; index < numberArray.length; index++) {
  if (numberArray[index] % 2 !== 0 && numberArray[index] > 5) {
    console.log(`First odd number greater than 5 is: ${numberArray[index]}`);
    break; // Exits the loop once the condition is met
  }
  console.log(`Checked number: ${numberArray[index]}`);
}
// Explanation:
// The break statement exits the loop when the first odd number greater than 5 is found.

// 5. Continue Statement in For Loop: Skipping Numbers Divisible by 3
console.log(
  "\nContinue Statement in For Loop: Skipping Numbers Divisible by 3"
);

for (let index = 1; index <= 10; index++) {
  if (index % 3 === 0) {
    console.log(`Skipping number ${index} because it's divisible by 3`);
    continue; // Skips the rest of the loop body for this iteration
  }
  console.log(`Number: ${index}`);
}
// Explanation:
// The continue statement skips numbers divisible by 3 and prints the remaining numbers.

// 6. While Loop Example: Logging In-Progress Tasks
console.log("\nWhile Loop Example: Logging In-Progress Tasks");

let tasksInProgress = ["Task 1", "Task 2", "Task 3"];
let taskIndex = 0;
while (taskIndex < tasksInProgress.length) {
  console.log(`In Progress: ${tasksInProgress[taskIndex]}`);
  taskIndex++; // Increment the index to move to the next task
}
// Explanation:
// The while loop iterates over an array of tasks and logs each task's status,
// running as long as there are tasks remaining.

// 7. Do-While Loop Example: Ensuring Minimum Execution for User Authentication Attempt
console.log(
  "\nDo-While Loop Example: Ensuring Minimum Execution for User Authentication Attempt"
);

let authAttempts = 0;
const maxAttempts = 3;
let isAuthenticated = false;
const correctPassword = "password123"; // Simulate correct password

// Simulated user inputs
const userInputs = ["wrongpassword", "password123"]; // Example user input: first attempt wrong, second attempt correct

do {
  console.log(`Authentication attempt ${authAttempts + 1}`);
  const enteredPassword = userInputs[authAttempts] || ""; // Get the simulated user input

  // Simulate checking password
  if (enteredPassword === correctPassword) {
    isAuthenticated = true;
    console.log("Authentication successful!");
  } else {
    console.log("Incorrect password. Please try again.");
  }
  authAttempts++;
} while (!isAuthenticated && authAttempts < maxAttempts);

if (!isAuthenticated) {
  console.log(
    "Maximum authentication attempts reached. Please try again later."
  );
} else {
  console.log(`User authenticated: ${isAuthenticated}`);
}

// Explanation:
// The do-while loop ensures the authentication attempt runs at least once,
// and continues until successful authentication or the maximum attempts are reached.
// Simulated user inputs are used for the demonstration.
// If the entered password matches the correct password, authentication is successful.
// If the password is incorrect, an error message is displayed, and another attempt is made.
// If the maximum number of attempts is reached without successful authentication, a message is displayed indicating failure.

// 8. For...In Loop Example: Iterating Over Object Properties
console.log("\nFor...In Loop Example: Iterating Over Object Properties");

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift",
};

for (const key in myObject) {
  console.log(`${key} is for ${myObject[key]}`);
}
// Explanation:
// The for...in loop iterates over the properties of an object,
// logging each key-value pair to the console.

// 9. For...In Loop Example: Iterating Over Array Indices
console.log("\nFor...In Loop Example: Iterating Over Array Indices");

const programmingLanguages = ["JavaScript", "Ruby", "Python", "Java", "C++"];

for (const index in programmingLanguages) {
  console.log(`Index ${index}: ${programmingLanguages[index]}`);
}
// Explanation:
// The for...in loop iterates over the indices of an array,
// logging each index and its corresponding value.
// Note: Generally, `for...of` or `Array.forEach` is preferred for array iteration.

// 10. Array.forEach Method Example: Iterating Over Array Elements
console.log("\nArray.forEach Method Example: Iterating Over Array Elements");

const codingLanguages = ["JavaScript", "Ruby", "Java", "Python", "C++"];

codingLanguages.forEach((language, index) => {
  console.log(`Index ${index}: ${language}`);
});
// Explanation:
// The forEach method is used to execute a function on each array element,
// providing both the element and its index.

// 11. Array.filter Method Example: Filtering Elements Based on Condition
console.log(
  "\nArray.filter Method Example: Filtering Elements Based on Condition"
);

const bookList = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const filteredBooks = bookList.filter(
  (book) => book.genre === "History" && book.publish >= 1995
);
console.log(filteredBooks);
// Explanation:
// The filter method creates a new array with elements that match the specified condition,
// filtering books by genre 'History' and publish year greater than or equal to 1995.

// 12. Array.map Method Example: Transforming Array Elements
console.log("\nArray.map Method Example: Transforming Array Elements");

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const transformedArray = numArray
  .map((num) => num * 10) // Multiply each number by 10
  .map((num) => num + 1) // Add 1 to each result
  .filter((num) => num >= 40); // Filter numbers greater than or equal to 40

console.log(transformedArray);
// Explanation:
// The map method transforms each element in the array.
// In this example, numbers are first multiplied by 10, then 1 is added to each,
// and finally filtered for numbers greater than or equal to 40.

// 13. Array.reduce Method Example: Summing Up Array Elements
console.log("\nArray.reduce Method Example: Summing Up Array Elements");

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(`Sum of array elements: ${sum}`);
// Explanation:
// The reduce method accumulates array values into a single result.
// In this example, it sums up all the numbers in the array.

// Summary of Loop Types and Control Statements:
// 1. For Loop: Executes a block of code a specific number of times.
// 2. Nested For Loop: Loops within loops, useful for multi-dimensional tasks like multiplication tables.
// 3. Array Iteration with For Loop: Iterates over array elements.
// 4. Break Statement: Exits the loop early based on a condition.
// 5. Continue Statement: Skips the current iteration and continues with the next one.
// 6. While Loop: Executes code as long as a condition is true.
// 7. Do-While Loop: Similar to while loop but guarantees at least one execution.
// 8. For...In Loop: Iterates over the properties of an object or array indices.
// 9. Array.forEach Method: Executes a function on each array element.
// 10. Array.filter Method: Filters elements based on a condition.
// 11. Array.map Method: Transforms each element in an array.
// 12. Array.reduce Method: Accumulates array values into a single result.
