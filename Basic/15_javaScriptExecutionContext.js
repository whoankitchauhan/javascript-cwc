// Global Execution Context
var globalVar = "Global Variable";

function outerFunction(outerArg) {
  // Function Execution Context for outerFunction
  var outerVar = "Outer Variable";

  function innerFunction(innerArg) {
    // Function Execution Context for innerFunction
    var innerVar = "Inner Variable";

    console.log("globalVar:", globalVar); // Accessible from global context
    console.log("outerArg:", outerArg);   // Accessible from outerFunction context
    console.log("outerVar:", outerVar);   // Accessible from outerFunction context
    console.log("innerArg:", innerArg);   // Accessible from innerFunction context
    console.log("innerVar:", innerVar);   // Accessible from innerFunction context
  }

  innerFunction("Inner Argument");
}

outerFunction("Outer Argument");

/*
Expected Output:
globalVar: Global Variable
outerArg: Outer Argument
outerVar: Outer Variable
innerArg: Inner Argument
innerVar: Inner Variable
*/

// Function Hoisting Example
hoistedFunction(); // This function is hoisted!

function hoistedFunction() {
  console.log("This function is hoisted!");
}

/*
Expected Output:
This function is hoisted!
*/

// Variable Hoisting Example
console.log(hoistedVar); // Output: undefined
var hoistedVar = "This variable is hoisted!";
console.log(hoistedVar); // Output: This variable is hoisted!

/*
Expected Output:
undefined
This variable is hoisted!
*/

// Execution Context Phases
var globalVar = "Global Scope";

function firstFunction() {
  var firstVar = "First Function Scope";

  function secondFunction() {
    var secondVar = "Second Function Scope";

    console.log("globalVar:", globalVar); // Global Scope
    console.log("firstVar:", firstVar);   // First Function Scope
    console.log("secondVar:", secondVar); // Second Function Scope
  }

  secondFunction();
}

firstFunction();

/*
Expected Output:
globalVar: Global Scope
firstVar: First Function Scope
secondVar: Second Function Scope
*/

// Block Scope (ES6)
if (true) {
  let blockScopedVar = "Block Scoped Variable";
  console.log(blockScopedVar); // Output: Block Scoped Variable
}

// console.log(blockScopedVar); // Uncommenting this line will result in a ReferenceError

/*
Expected Output:
Block Scoped Variable
*/

// 'this' in Global Context
console.log(this); // Output: Window object (in browsers), global object (in Node.js)

// 'this' in Function Context
function showThis() {
  console.log(this); // Output: Window object (in browsers), global object (in Node.js)
}
showThis();

var obj = {
  method: function () {
    console.log(this); // Output: { method: [Function: method] }
  },
};
obj.method();

/*
Expected Output:
Window object (in browsers), global object (in Node.js)
{ method: [Function: method] }
*/

// Arrow Function and 'this'
const arrowFunction = () => {
  console.log(this); // Output: Window object (in browsers), global object (in Node.js)
};

arrowFunction();

/*
Expected Output:
Window object (in browsers), global object (in Node.js)
*/

/*
Explanation:
- **Global Execution Context:** Created when the JavaScript file is first loaded. Initializes the global object and `this`, and hoists variable and function declarations.

- **Function Execution Context:** Created each time a function is called. Contains local variables, arguments, and a reference to `this`. Functions have their own execution contexts.

- **Creation Phase:** During this phase, the execution context is set up, including hoisting of variables and functions.

- **Execution Phase:** The code is executed line by line, assigning values to variables and running function bodies.

- **Hoisting:**
  - **Variables:** Declarations are hoisted and initialized to `undefined`. Initializations happen in the execution phase.
  - **Functions:** Full function declarations are hoisted, allowing them to be used before their declaration in the code.

- **`this` Keyword:**
  - In the global context, `this` refers to the global object (`window` in browsers, `global` in Node.js).
  - In a function context, `this` depends on the call context.
  - In arrow functions, `this` refers to the enclosing lexical context, not the function itself.

- **Block Scope (ES6):** Variables declared with `let` and `const` are block-scoped and not accessible outside the block they are declared in.
*/

