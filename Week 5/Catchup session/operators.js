// There are four types of operators in JavaScript: Arithmetic, Assignment, Comparison, and Logical operators.

// 1. Arithmetics Ops
// let a = 10;
// let b = 5;

// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division
// console.log(a % b); // Modulus (Remainder)
// console.log(a ** b); // Exponentiation (Power)

// 2. Assignment Ops
let x = 10; // Assignment

x +=5; // Addition assignment (x = x + 5 (15))
x -= 3; // Subtraction assignment (x = x - 3 (12))
x *= 2; // Multiplication assignment (x = x * 2 (24))
x /= 4; // Division assignment (x = x / 4 (6))
x %= 4; // Modulus assignment (x = x % 4 (2))
x **= 4; // Exponentiation assignment (x = x ** 4 (16))
x &= 2; // Bitwise AND assignment (x = x & 2 (0))


// 3. Comparison Ops
let a = 5;
let b = "5";

// console.log(a == b); // Loose equality (true) - compares value only, not data type // OR Gate
// console.log(a === b); // Strict equality (false) - compares value AND data type // AND Gate
// console.log(a != b); // Loose inequality (false) - compares value only, not data type // OR Gate
// console.log(a !== b); // Strict inequality (true) - compares value AND data type // AND Gate


// 3. Logical Ops
let isLoggedIn = true;
let hasPermission = false;

// console.log(isLoggedIn && hasPermission); // Logical AND (false) - Multiply)
// console.log(isLoggedIn || hasPermission); // Logical OR (true) - Add
// console.log(!isLoggedIn); // Logical NOT (false) - Negation

// Short circuit evaluation
let name = "" || "Guest"; // If the first operand is truthy, it returns that value; otherwise, it returns the second operand.
console.log(name); // Guest