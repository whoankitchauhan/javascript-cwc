// Example of using 'this' in an object method
const user = {
  username: "Ankit",
  price: 999,

  // Method using 'this' keyword
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to our website!`);
    console.log(this); // 'this' refers to the 'user' object
  },
};

// Calling the method
user.welcomeMessage();
// Output: Ankit, welcome to our website!
// Output: { username: 'Ankit', price: 999, welcomeMessage: [Function: welcomeMessage] }

// Changing the username property
user.username = "Sam";
user.welcomeMessage();
// Output: Sam, welcome to our website!
// Output: { username: 'Sam', price: 999, welcomeMessage: [Function: welcomeMessage] }

// Example of 'this' in global context
console.log(this);
// Output: {} (In strict mode in Node.js, {} represents the module.exports object)
// Output: Window {...} (In browsers, 'this' refers to the Window object)

// Example of 'this' in a regular function
function showGlobalUsername() {
  this.username = "GlobalAnkit"; // Adding a property to the global object
  console.log(this.username); // 'this' refers to the global object
}

showGlobalUsername(); // Output: GlobalAnkit

// Example of 'this' in a regular function in strict mode
function showGlobalUsernameStrict() {
  "use strict";
  console.log(this); // 'this' is undefined in strict mode
}

showGlobalUsernameStrict(); // Output: undefined

// Example of 'this' in an arrow function
const showGlobalUsernameArrow = () => {
  console.log(this); // 'this' refers to the enclosing lexical context, which is the global scope in this case
};

showGlobalUsernameArrow(); // Output: {} (In Node.js)
// Output: Window {...} (In browsers)

// Example of arrow function returning an object
const getUserObject = (firstName, lastName) => ({ firstName, lastName });

console.log(getUserObject("Ankit", "Chauhan"));
// Output: { firstName: 'Ankit', lastName: 'Chauhan' }

// Example of forEach with an array
const numbersArray = [2, 5, 3, 7, 8];
numbersArray.forEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});
// Output:
// Index: 0, Value: 2
// Index: 1, Value: 5
// Index: 2, Value: 3
// Index: 3, Value: 7
// Index: 4, Value: 8

// Example of arrow function with concise body
const addTwoNumbers = (num1, num2) => num1 + num2;

console.log(addTwoNumbers(3, 4));
// Output: 7

// Example of arrow function returning an object
const getUserDetails = (username, age) => ({ username, age });

console.log(getUserDetails("Ankit", 25));
// Output: { username: 'Ankit', age: 25 }

/*
Explanation:
- 'this' in Object Methods: In an object method, 'this' refers to the object the method belongs to.
  - Example: In 'welcomeMessage' method, 'this' refers to the 'user' object.

- 'this' in Global Context: In the global execution context (outside of any function), 'this' refers to the global object (Window in browsers, global in Node.js).

- 'this' in Regular Functions: In regular functions, 'this' refers to the global object when the function is called in the global context. In strict mode, 'this' is undefined.
  - Example: In 'showGlobalUsername', 'this' refers to the global object.
  - Example: In 'showGlobalUsernameStrict', 'this' is undefined due to strict mode.

- 'this' in Arrow Functions: Arrow functions do not have their own 'this'. Instead, 'this' refers to the lexical context (the enclosing function or global context).
  - Example: In 'showGlobalUsernameArrow', 'this' refers to the enclosing lexical context, which is the global scope in this case.

- Arrow Functions Returning Objects: Arrow functions can return objects using parentheses to wrap the object literal.
  - Example: 'getUserObject' returns an object with 'firstName' and 'lastName' properties.
  - Example: 'getUserDetails' returns an object with 'username' and 'age' properties.

- forEach with Arrow Functions: The 'forEach' method executes a provided function once for each array element.
  - Example: 'numbersArray.forEach' logs the index and value of each element in 'numbersArray'.
*/

// Key Concepts
/*
Key Concepts:
- 'this' Keyword:
  - In an object method, 'this' refers to the object the method belongs to.
  - In the global context, 'this' refers to the global object (Window in browsers, global in Node.js).
  - In regular functions, 'this' refers to the global object unless in strict mode, where 'this' is undefined.
  - In arrow functions, 'this' does not refer to the function itself but inherits from the parent scope.

- Arrow Functions:
  - Do not have their own 'this'; they inherit 'this' from the enclosing lexical context.
  - Can return objects concisely using parentheses to wrap the object literal.
  - Provide a concise syntax for writing functions.
*/
