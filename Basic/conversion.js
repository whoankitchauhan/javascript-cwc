// Variable Initialization
let score = "Ankit";

// Check the type of 'score' variable
console.log(typeof score); // string
console.log(typeof(score)); // string (both ways are correct)

// Convert 'score' to a Number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN (because "hitesh" cannot be converted to a number)

// Examples of type conversion to Number
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "hitesh";

// Convert 'isLoggedIn' to a Boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true (non-empty string is true)

// Boolean conversion examples
// 1 => true, 0 => false
// "" (empty string) => false
// "Ankit" => true (non-empty string)

// Convert a number to a String
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string

// *********************** Operations ***********************

// Negation operation
let value = 3;
let negValue = -value;
console.log(negValue); // -3

// Basic arithmetic operations
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8 (exponentiation: 2 raised to the power of 3)
console.log(2 / 3); // 0.6666...
console.log(2 % 3); // 2 (remainder of 2 divided by 3)

// String concatenation
let str1 = "hello";
let str2 = " Ankit";
let str3 = str1 + str2;
console.log(str3); // "hello Ankit"

// String and number concatenation
console.log("1" + 2); // "12" (number is converted to string and concatenated)
console.log(1 + "2"); // "12" (number is converted to string and concatenated)
console.log("1" + 2 + 2); // "122" (number 2 is converted to string and concatenated)
console.log(1 + 2 + "2"); // "32" (1+2 is 3, then 3 is concatenated with "2")

// Operator precedence
console.log((3 + 4) * 5 % 3); // 2 (3+4=7, 7*5=35, 35%3=2)

// Unary plus operator
console.log(+true); // 1 (true is converted to number 1)
console.log(+""); // 0 (empty string is converted to number 0)

// Multiple assignments
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // num1, num2, and num3 are all assigned the value 4
console.log(num1, num2, num3); // 4 4 4

// Increment operator
let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101 (pre-increment increases the value before using it)
