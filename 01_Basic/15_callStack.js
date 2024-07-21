// Global Execution Context
var globalVar = "Global Variable";

function a() {
  console.log("Function a started");
  b(); // Call function b
  console.log("Function a completed");
}

function b() {
  console.log("Function b started");
  c(); // Call function c
  console.log("Function b completed");
}

function c() {
  console.log("Function c started");
  // Uncommenting the following line will demonstrate stack overflow
  // recursiveFunction();
  console.log("Function c completed");
}

// Recursive function to illustrate stack overflow
function recursiveFunction() {
  console.log("Recursive function call");
  recursiveFunction(); // Infinite recursion
}

// Call function a to start the process
a();

/*
Expected Output:
Function a started
Function b started
Function c started
Function c completed
Function b completed
Function a completed

Explanation:
1. **Global Context Initialization**:
   - When the JavaScript file is loaded, the global execution context is created. This sets up the global scope, initializing variables and functions.
   - In this context, `globalVar`, `a()`, `b()`, `c()`, and `recursiveFunction()` are defined.

2. **Call Stack Execution**:
   - When `a()` is called:
     - `a()`'s execution context is pushed onto the call stack.
     - Inside `a()`, `b()` is called, pushing `b()`'s execution context onto the stack.
     - Inside `b()`, `c()` is called, pushing `c()`'s execution context onto the stack.
     - `c()` completes and its context is removed from the stack.
     - Control returns to `b()`, which completes and is removed from the stack.
     - Control returns to `a()`, which completes and is removed from the stack.

   - **Call Stack Visualization**:
     ```
     Global Context
     a() Context
     b() Context
     c() Context
     c() completes and is removed
     b() completes and is removed
     a() completes and is removed
     Back to Global Context
     ```

3. **Stack Overflow Example**:
   - If `recursiveFunction()` is called inside `c()`, it results in infinite recursion.
   - Each call to `recursiveFunction()` adds a new frame to the stack.
   - Eventually, the stack exceeds its limit, causing a stack overflow error.

**Key Points:**
- **LIFO Principle:** The call stack operates on the Last In, First Out (LIFO) principle. The most recent function call is always at the top of the stack.
- **Function Execution:** Each function call creates a new stack frame, which contains the function's execution context. This frame is managed until the function completes.
- **Completion and Removal:** After a function completes, its stack frame is removed, and control returns to the function that was previously on the stack.
- **Stack Overflow:** Occurs when infinite recursion or excessive function calls exceed the stack's capacity. This can lead to runtime errors.

*/
