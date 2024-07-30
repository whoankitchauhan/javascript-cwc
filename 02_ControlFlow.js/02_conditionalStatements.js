// Conditional Statements

// 1. Simple if Statement
const temperature = 30;

console.log("Conditional Statements:");
if (temperature > 25) {
  console.log("It's warm outside."); // Executes if temperature is greater than 25
}

const userCredits = 10;

// If the user has more than 5 credits, perform multiple actions
if (userCredits > 5)
    console.log("Credits check passed - Action 1: Access granted"),
    console.log("Credits check passed - Action 2: Feature unlocked"),
    console.log("Credits check passed - Action 3: Bonus awarded"),
    console.log("Credits check passed - Action 4: Discount applied"),
    console.log("Credits check passed - Action 5: Free item added"),
    console.log("Credits check passed - Action 6: Special offer sent");
else console.log("Insufficient credits - Access denied");

// 2. if-else Statement
const isRaining = false;

if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("No need for an umbrella."); // Executes if isRaining is false
}

// 3. if-else if-else Statement
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // Executes if score is between 80 and 89
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D or below"); // Executes if score is below 70
}

// 4. Switch Statement
const dayOfWeek = 3; // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday"); // Executes if dayOfWeek is 3
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day"); // Executes if dayOfWeek is not between 1 and 7
}

// 5. Ternary Operator
const age = 20;
const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";

console.log("Ternary Operator:");
console.log(canVote); // Executes based on the condition: age >= 18

/*
Explanation:
1. if Statement:
   - Evaluates a single condition and executes the block if the condition is true.
   - Example: Checks if the temperature is greater than 25.

2. if-else Statement:
   - Evaluates a condition; if true, executes the first block. If false, executes the else block.
   - Example: Checks if it is raining and provides advice accordingly.

3. if-else if-else Statement:
   - Evaluates multiple conditions in sequence and executes the corresponding block for the first true condition.
   - Example: Determines a grade based on the score.

4. Switch Statement:
   - Evaluates a variable and executes the block of code that matches the case value. Uses break to exit the switch block.
   - Example: Outputs the name of the day based on the dayOfWeek variable.

5. Ternary Operator:
   - A shorthand for the if-else statement. It evaluates a condition and returns one of two values based on whether the condition is true or false.
   - Example: Determines if a person can vote based on their age.
*/
