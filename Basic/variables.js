// Print a message to the console
console.log("Hey!"); // Prints "Hey" to the console

// *********************** Variable Declarations ***********************

// Using `const` for constants
const name = "Ankit Chauhan"; // `const` declares a constant value which cannot be reassigned
// name = "John Doe"; // This will throw an error: Assignment to constant variable

// Using `let` for variables that may change
let phone = 7011107200; // `let` declares a block-scoped variable that can be reassigned
phone = 1234567890; // This is valid as `let` allows reassignment

// *********************** var vs let vs const ***********************

// Using `var` (function-scoped)
function varExample() {
  var age = 25; // `var` is function-scoped
  if (true) {
    var age = 30; // Same variable, function-scoped
    console.log(age); // 30
  }
  console.log(age); // 30 (accessible outside the block)
}
varExample();

// Using `let` (block-scoped)
function letExample() {
  let age = 25; // `let` is block-scoped
  if (true) {
    let age = 30; // Different variable, block-scoped
    console.log(age); // 30
  }
  console.log(age); // 25 (not accessible outside the block where it was redefined)
}
letExample();

// Using `const` (block-scoped constant)
function constExample() {
  const age = 25; // `const` is block-scoped and cannot be reassigned
  if (true) {
    const age = 30; // Different variable, block-scoped
    console.log(age); // 30
  }
  console.log(age); // 25 (not accessible outside the block where it was redefined)
}
constExample();

// *********************** Hoisting ***********************

// Hoisting with `var`
function hoistingVar() {
  console.log(hoistedVar); // undefined (variable is hoisted but not initialized)
  var hoistedVar = 10;
  console.log(hoistedVar); // 10
}
hoistingVar();

// Hoisting with `let` and `const`
function hoistingLetConst() {
  // console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
  let hoistedLet = 20;
  console.log(hoistedLet); // 20

  // console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
  const hoistedConst = 30;
  console.log(hoistedConst); // 30
}
hoistingLetConst();

// *********************** Re-declaration ***********************

// Re-declaration with `var`
function redeclarationVar() {
  var name = "Alice";
  var name = "Bob"; // Allowed
  console.log(name); // Bob
}
redeclarationVar();

// Re-declaration with `let` and `const`
function redeclarationLetConst() {
  let city = "New York";
  // let city = "Los Angeles"; // SyntaxError: Identifier 'city' has already been declared
  city = "Los Angeles"; // Allowed with `let`
  console.log(city); // Los Angeles

  const country = "USA";
  // const country = "Canada"; // SyntaxError: Identifier 'country' has already been declared
  // country = "Canada"; // TypeError: Assignment to constant variable.
  console.log(country); // USA
}
redeclarationLetConst();

// *********************** Best Practices ***********************

// Use `let` for variables that may change
let userAge = 25;
userAge = 26;

// Use `const` for variables that should not change
const userName = "Charlie";
// userName = "Dave"; // TypeError: Assignment to constant variable.

// Avoid using `var` to prevent unexpected behaviors
function avoidVar() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable
    console.log(x); // 20
  }
  console.log(x); // 20 (unexpected if you expect block-scoping)
}
avoidVar();
