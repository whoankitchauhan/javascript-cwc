// Demonstrating block scope with 'let' and 'const'
let globalVar = 300; // Global scope variable
if (true) {
  let blockVar = 10; // Block scope variable, shadows the global variable
  const blockConst = 20; // Block scope constant
  console.log("INNER blockVar:", blockVar); // Output: INNER blockVar: 10
}

console.log("Global globalVar:", globalVar); // Output: Global globalVar: 300
// console.log(blockConst); // Error: blockConst is not defined (block scoped)

// Demonstrating function scope
function outerFunction() {
  const outerVar = "outerValue"; // Function scope variable

  function innerFunction() {
    const innerVar = "innerValue"; // Function scope variable
    console.log("Accessing outerVar from innerFunction:", outerVar); // Output: outerValue
  }

  // console.log(innerVar); // Error: innerVar is not defined (function scoped)
  innerFunction(); // Call inner function
}

outerFunction(); // Call outer function

// Demonstrating nested block scope
if (true) {
  const username = "Ankit"; // Block scope variable
  if (username === "Ankit") {
    const website = "example.com"; // Block scope variable
    console.log("Username and Website:", username + " " + website); // Output: Ankit example.com
  }
  // console.log(website); // Error: website is not defined (block scoped)
}

// console.log(username); // Error: username is not defined (block scoped)

// ++++++++++++++++++ Function Hoisting ++++++++++++++++++

// Function declaration and hoisting
console.log(incrementByOne(5)); // Output: 6 (Function declarations are hoisted)

// Function declaration
function incrementByOne(num) {
  return num + 1;
}

// Function expression and temporal dead zone (TDZ)
 
// console.log(incrementByTwo(5)); // Error: Cannot access 'incrementByTwo' before initialization
const incrementByTwo = function (num) {
  return num + 2;
};

console.log(incrementByTwo(67)); // Output: 69

// ++++++++++++++++++ Explanation Section ++++++++++++++++++

/*
Explanation:
- Global Scope: Variables declared outside any function or block are accessible from anywhere in the code.
  - Example: 'globalVar' is declared in the global scope and can be accessed globally.

- Block Scope: Variables declared with 'let' and 'const' inside a block (e.g., if statement, for loop) are limited to that block.
  - Example: 'blockVar' and 'blockConst' inside the if statement are block scoped and do not affect or get affected by the global 'globalVar'.

- Function Scope: Variables declared inside a function are accessible only within that function. Nested functions can access variables from their parent function due to closures.
  - Example: 'outerVar' declared in 'outerFunction' is accessible in nested function 'innerFunction'.

- Hoisting: Function declarations are hoisted to the top of their scope, allowing them to be called before they are defined in the code.
  - Example: 'incrementByOne' function can be called before its definition due to hoisting.

- Temporal Dead Zone (TDZ): 'let' and 'const' declarations are not accessible before their initialization in the code. Attempting to use them before initialization results in a ReferenceError.
  - Example: Trying to call 'incrementByTwo' before its initialization results in an error because 'incrementByTwo' is a function expression, and it's not hoisted.
*/

// Additional Examples to Illustrate Scope Concepts

// 1. Block Scope with 'let' and 'const'
if (true) {
  let blockScopedLet = "I am block scoped (let)";
  const blockScopedConst = "I am also block scoped (const)";
  console.log(blockScopedLet); // Output: I am block scoped (let)
  console.log(blockScopedConst); // Output: I am also block scoped (const)
}
// console.log(blockScopedLet); // Error: blockScopedLet is not defined
// console.log(blockScopedConst); // Error: blockScopedConst is not defined

// 2. Function Scope
function parentFunction() {
  var functionScopedVar = "I am function scoped";
  function childFunction() {
    console.log(functionScopedVar); // Output: I am function scoped
  }
  childFunction();
}
parentFunction();
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

// 3. Hoisting with Function Declarations
console.log(hoistedFunction(3)); // Output: 6 (hoistedFunction is hoisted)

function hoistedFunction(num) {
  return num * 2;
}

// 4. Hoisting with 'var' (Not Recommended)
console.log(hoistedVar); // Output: undefined (hoistedVar is hoisted but not initialized)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted

// 5. Temporal Dead Zone (TDZ) with 'let' and 'const' 
if (true) {
  // console.log(tdzVar); // Error: Cannot access 'tdzVar' before initialization
  let tdzVar = "I am in TDZ until this line";
  console.log(tdzVar); // Output: I am in TDZ until this line
}

// ++++++++++++++++++ Key Concepts ++++++++++++++++++

/*
Key Concepts:
- Global Scope: Variables declared outside any function or block are accessible from anywhere in the code.
- Block Scope: Variables declared with 'let' and 'const' inside a block (e.g., if statement, for loop) are limited to that block. This prevents variables from leaking outside of their intended scope.
- Function Scope: Variables declared inside a function are accessible only within that function. Nested functions can access variables from their parent function due to closures.
- Hoisting: Function declarations are hoisted to the top of their scope, allowing them to be called before they are defined in the code. This is not true for function expressions or variables declared with 'let' or 'const'.
- Temporal Dead Zone (TDZ): 'let' and 'const' declarations are not accessible before their initialization in the code. Attempting to use them before initialization results in a ReferenceError.
*/