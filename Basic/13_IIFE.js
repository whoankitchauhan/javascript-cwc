// Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function connectToDatabase() {
  console.log(`DB CONNECTED`);
})();
// Output: DB CONNECTED

// Anonymous IIFE
(function () {
  console.log(`DB CONNECTED ANONYMOUS`);
})();
// Output: DB CONNECTED ANONYMOUS

// Arrow Function IIFE with a parameter
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Ankit");
// Output: DB CONNECTED TWO Ankit

// IIFE with return value
const result = (function () {
  let message = "DB CONNECTION SUCCESSFUL";
  return message;
})();
console.log(result);
// Output: DB CONNECTION SUCCESSFUL

// IIFE with private variables
const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count: ${count}`);
    },
  };
})();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1

/*
Explanation:
- Named IIFE: A named function expression that is immediately invoked.
  - Example: 'connectToDatabase' is invoked immediately after its definition.

- Anonymous IIFE: An unnamed function expression that is immediately invoked.
  - Example: Anonymous function is invoked immediately after its definition.

- Arrow Function IIFE: An arrow function expression that is immediately invoked.
  - Example: Arrow function is invoked immediately with the parameter 'Ankit'.

- IIFE with return value: IIFE can return values that can be stored in variables.
  - Example: 'result' stores the return value of the IIFE.

- IIFE with private variables: IIFE can create private variables and methods that are not accessible from the outside.
  - Example: 'counter' object contains 'increment' and 'decrement' methods with private 'count' variable.
*/


/*
Key Concepts:
- IIFE (Immediately Invoked Function Expression):
  - A function that runs as soon as it is defined.
  - Useful for initializing values and avoiding polluting the global scope.
  - Can be named or anonymous.

- Syntax:
  - IIFE is defined using a function expression wrapped in parentheses, followed by another set of parentheses for invocation.
  - Example: (function () { ... })();

- Arrow Function IIFE:
  - Arrow functions can also be used to create IIFE.
  - Example: (() => { ... })();

- Private Variables:
  - IIFE can be used to create private variables and functions.
  - Example: 'counter' object demonstrates private 'count' variable with public methods.

- Return Values:
  - IIFE can return values that can be assigned to variables.
  - Example: IIFE returning a message string stored in 'result'.
*/
