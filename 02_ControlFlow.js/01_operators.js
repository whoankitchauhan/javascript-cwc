// Arithmetic Operators
// Used for mathematical operations

let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition: 10 + 5 = 15
console.log("a - b =", a - b); // Subtraction: 10 - 5 = 5
console.log("a * b =", a * b); // Multiplication: 10 * 5 = 50
console.log("a / b =", a / b); // Division: 10 / 5 = 2
console.log("a % b =", a % b); // Modulus: 10 % 5 = 0 (remainder of division)
console.log("a ** b =", a ** b); // Exponentiation: 10 ** 5 = 100000

/*
Explanation:
- `+` (Addition): Adds two numbers.
- `-` (Subtraction): Subtracts the second number from the first.
- `*` (Multiplication): Multiplies two numbers.
- `/` (Division): Divides the first number by the second.
- `%` (Modulus): Returns the remainder of division.
- `**` (Exponentiation): Raises the first number to the power of the second.
*/

// Assignment Operators
// Used to assign values to variables

let x = 10;
x += 5; // Equivalent to x = x + 5
console.log("Assignment Operators:");
console.log("x =", x); // 15

x -= 3; // Equivalent to x = x - 3
console.log("x =", x); // 12

x *= 2; // Equivalent to x = x * 2
console.log("x =", x); // 24

x /= 4; // Equivalent to x = x / 4
console.log("x =", x); // 6

x %= 2; // Equivalent to x = x % 2
console.log("x =", x); // 0

x **= 3; // Equivalent to x = x ** 3
console.log("x =", x); // 0 (0 raised to any power is 0)

/*
Explanation:
- `=` (Assignment): Assigns a value to a variable.
- `+=`, `-=`, `*=`, `/=`, `%=`: Compound assignment operators that perform an operation and assign the result to the variable.
- `**=` (Exponentiation assignment): Raises the variable to the power of the right-hand operand and assigns the result.
*/

// Comparison Operators
// Used to compare two values

console.log("Comparison Operators:");
console.log("a == b:", a == b); // Equality: false (10 is not equal to 5)
console.log("a != b:", a != b); // Inequality: true (10 is not equal to 5)
console.log("a === b:", a === b); // Strict equality: false (10 is not strictly equal to 5)
console.log("a !== b:", a !== b); // Strict inequality: true (10 is not strictly equal to 5)
console.log("a > b:", a > b); // Greater than: true (10 is greater than 5)
console.log("a < b:", a < b); // Less than: false (10 is not less than 5)
console.log("a >= b:", a >= b); // Greater than or equal to: true (10 is greater than or equal to 5)
console.log("a <= b:", a <= b); // Less than or equal to: false (10 is not less than or equal to 5)

/*
Explanation:
- `==` (Equality): Checks if two values are equal, performing type conversion if necessary.
- `!=` (Inequality): Checks if two values are not equal, performing type conversion if necessary.
- `===` (Strict Equality): Checks if two values are equal without type conversion.
- `!==` (Strict Inequality): Checks if two values are not equal without type conversion.
- `>` (Greater than): Checks if the first value is greater than the second.
- `<` (Less than): Checks if the first value is less than the second.
- `>=` (Greater than or equal to): Checks if the first value is greater than or equal to the second.
- `<=` (Less than or equal to): Checks if the first value is less than or equal to the second.
*/

// String Operators
// Used to perform operations on strings

const str1 = "Hello";
const str2 = "World";

console.log("String Operators:");
console.log("str1 + ' ' + str2 =", str1 + " " + str2); // Concatenation: "Hello World"
console.log("str1.length =", str1.length); // Length of string: 5
console.log("str1.toUpperCase() =", str1.toUpperCase()); // Convert to uppercase: "HELLO"
console.log("str2.toLowerCase() =", str2.toLowerCase()); // Convert to lowercase: "world"

/*
Explanation: 
- `+` (Concatenation): Combines two strings into one.
- `.length`: Returns the length of a string.
- `.toUpperCase()`: Converts the string to uppercase.
- `.toLowerCase()`: Converts the string to lowercase.
*/

// Logical Operators
// Used to combine or invert boolean values

const trueVal = true;
const falseVal = false;

console.log("Logical Operators:");
console.log("trueVal && falseVal =", trueVal && falseVal); // Logical AND: false
console.log("trueVal || falseVal =", trueVal || falseVal); // Logical OR: true
console.log("!trueVal =", !trueVal); // Logical NOT: false

/*
Explanation:
- `&&` (Logical AND): Returns true if both operands are true.
- `||` (Logical OR): Returns true if at least one operand is true.
- `!` (Logical NOT): Inverts the boolean value (true becomes false, false becomes true).
*/

// Bitwise Operators
// Used to perform bit-level operations

const num1 = 5; // 0101 in binary
const num2 = 3; // 0011 in binary

console.log("Bitwise Operators:");
console.log("num1 & num2 =", num1 & num2); // Bitwise AND: 1 (0001 in binary)
console.log("num1 | num2 =", num1 | num2); // Bitwise OR: 7 (0111 in binary)
console.log("num1 ^ num2 =", num1 ^ num2); // Bitwise XOR: 6 (0110 in binary)
console.log("~num1 =", ~num1); // Bitwise NOT: -6 (inverts bits of 0101)
// Step-by-step explanation:
// 1. Convert num1 to binary: 00000000 00000000 00000000 00000101
// 2. Apply NOT: 11111111 11111111 11111111 11111010
// 3. Interpret as a signed integer using two's complement:
//    - Leftmost bit is 1, indicating a negative number.
//    - Invert bits: 00000000 00000000 00000000 00000101
//    - Add 1 to the result: 00000000 00000000 00000000 00000110
//    - Result is -6

console.log("num1 << 1 =", num1 << 1); // Bitwise left shift: 10 (1010 in binary)
console.log("num1 >> 1 =", num1 >> 1); // Bitwise right shift: 2 (0010 in binary)

/*
Explanation:
- `&` (Bitwise AND): Performs a bitwise AND operation.
- `|` (Bitwise OR): Performs a bitwise OR operation.
- `^` (Bitwise XOR): Performs a bitwise XOR operation.
- `~` (Bitwise NOT): Inverts the bits of the number.
- `<<` (Bitwise Left Shift): Shifts the bits to the left.
- `>>` (Bitwise Right Shift): Shifts the bits to the right.
*/

// Ternary Operator
// A shorthand for if-else statements

const age = 18;
const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";

console.log("Ternary Operator:");
console.log("canVote =", canVote); // "Yes, can vote"

/*
Explanation:
- The ternary operator (`condition ? true : false`) provides a concise way to write `if-else` statements.
- If the condition is true, the expression before the `:` is returned; otherwise, the expression after the `:` is returned.
*/

// Type Operators
// Used to determine the type of a value

const number = 42;
const text = "Hello";
const isTrue = true;

console.log("Type Operators:");
console.log("typeof number =", typeof number); // Number
console.log("typeof text =", typeof text); // String
console.log("typeof isTrue =", typeof isTrue); // Boolean
console.log("typeof undefinedVar =", typeof undefinedVar); // Undefined (undefinedVar is not declared)

// `typeof` is used to determine the type of a variable or value
// Note: `undefinedVar` will show `undefined` because it is not declared, but it's not an error when using `typeof`

/*
Explanation:
- `typeof`: Returns a string indicating the type of the operand.
- Can be used to check the type of variables and values at runtime.
*/
