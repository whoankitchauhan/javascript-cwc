console.log("Hey!"); // Prints "Hey" to the console

// Declaring variables
const name = "Ankit Chauhan"; // Uses `const` for a constant value (unchanging)
let phone = 7011107200; // Uses `let` for a variable that might change

/*
// Prefer `let` over `var` for variable declarations

// Explanation:

In JavaScript, the keywords `var` and `let` are used to declare variables. However, there's a crucial difference in their scope (visibility) within your code.

- `var`: Variables declared with `var` have a function-scoped visibility. This means they can be accessed from anywhere within the function they're declared in, even from nested blocks of code. However, this can lead to unintended consequences if you're not careful, as a `var` declared inside a loop or conditional statement can potentially conflict with a variable of the same name outside that block.

- `let`: Variables declared with `let` have a block-scoped visibility. This means they can only be accessed from the block of code (such as an if statement, loop, or the entire code block within curly braces `{}`) where they're declared. This provides better control over variable scope and helps prevent accidental variable conflicts, especially in complex code.

// Using `var` (risky!)
if (true) {
    var age = 30; // Accessible everywhere in the function
}

console.log(age); // Might work, might cause issues!

// Using `let` (safe)
for (let i = 0; i < 5; i++) {
    console.log(i); // Only accessible inside the loop
}

console.log(i); // This will throw an error because `i` is not defined here

*/
