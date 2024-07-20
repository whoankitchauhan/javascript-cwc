// Global Execution Context
var globalVar = "Global Variable";

function outerFunction(outerArg) {
  // Function Execution Context for outerFunction
  var outerVar = "Outer Variable";

  function innerFunction(innerArg) {
    // Function Execution Context for innerFunction
    var innerVar = "Inner Variable";

    console.log("globalVar:", globalVar); // Accessible
    console.log("outerArg:", outerArg); // Accessible
    console.log("outerVar:", outerVar); // Accessible
    console.log("innerArg:", innerArg); // Accessible
    console.log("innerVar:", innerVar); // Accessible
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
hoistedFunction();

function hoistedFunction() {
  console.log("This function is hoisted!");
}

/*
Expected Output:
This function is hoisted!
*/

// Variable Hoisting Example
console.log(hoistedVar); // undefined
var hoistedVar = "This variable is hoisted!";
console.log(hoistedVar); // This variable is hoisted!

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
    console.log("firstVar:", firstVar); // First Function Scope
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
  console.log(blockScopedVar); // Block Scoped Variable
}

// console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined

/*
Expected Output:
Block Scoped Variable
*/

// 'this' in Global Context
console.log(this); // Window object (in browsers), global object (in Node.js)

// 'this' in Function Context
function showThis() {
  console.log(this);
}

showThis(); // Window object (in browsers), global object (in Node.js)

var obj = {
  method: function () {
    console.log(this); // 'this' refers to the obj
  },
};

obj.method();

/*
Expected Output:
Window object (in browsers), global object (in Node.js)
Window object (in browsers), global object (in Node.js)
{ method: [Function: method] }
*/

// Arrow Function and 'this'
const arrowFunction = () => {
  console.log(this); // 'this' refers to the enclosing lexical context
};

arrowFunction();

/*
Expected Output:
Window object (in browsers), global object (in Node.js)
*/

/*
Explanation:
- Global Execution Context: Created when the JavaScript file is loaded. Contains global variables and functions. The 'this' keyword refers to the global object.
- Function Execution Context: Created whenever a function is called. Contains arguments, local variables, and functions. The 'this' keyword is determined by how the function is called.
- Creation Phase: In this phase, the execution context is set up, including the creation of the global object, setting up 'this', and hoisting of variables and functions.
- Execution Phase: In this phase, the code is executed line by line, and variable values are assigned.
- Hoisting: Variables and function declarations are moved to the top of their containing scope during the creation phase.
- 'this' Keyword: Refers to the global object in the global execution context. In a function context, it is determined by how the function is called. In arrow functions, 'this' refers to the enclosing lexical context.
- Block Scope: Variables declared with 'let' and 'const' are block-scoped and are not accessible outside the block they are declared in.
*/

/*
Key Concepts:
- Global Execution Context (GEC):
  - Created when the JavaScript file is loaded.
  - Contains global variables and functions.
  - 'this' refers to the global object (Window in browsers, global in Node.js).

- Function Execution Context (FEC):
  - Created whenever a function is called.
  - Contains arguments, local variables, and functions.
  - 'this' is determined by how the function is called.

- Creation Phase:
  - The execution context is set up.
  - Global object is created, 'this' is set.
  - Variables and functions are hoisted.

- Execution Phase:
  - The code is executed line by line.
  - Variable values are assigned.

- Hoisting:
  - Variables and function declarations are moved to the top of their containing scope during the creation phase.
  - Only declarations are hoisted, not initializations.

- 'this' Keyword:
  - Refers to the global object in the global execution context.
  - In a function context, it is determined by how the function is called.
  - In arrow functions, 'this' refers to the enclosing lexical context.

- Block Scope:
  - Variables declared with 'let' and 'const' are block-scoped.
  - Not accessible outside the block they are declared in.
*/
