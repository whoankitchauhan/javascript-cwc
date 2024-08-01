const userInputs = ["wrongpassword", "password123"];

// Example 1: First iteration
let authAttempts = 0;
let enteredPassword = userInputs[authAttempts] || "";
console.log(enteredPassword); // Output: "wrongpassword"

// Example 2: Second iteration
authAttempts = 1;
enteredPassword = userInputs[authAttempts] || "";
console.log(enteredPassword); // Output: "password123"

// Example 3: Third iteration (index out of bounds)
authAttempts = 2;
enteredPassword = userInputs[authAttempts] ;
console.log(enteredPassword); // Output: ""


