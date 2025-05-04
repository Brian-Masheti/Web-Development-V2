// Var - Older way of declaring varing variables, function scoped (Try to avoid using it for modern codebase)
var age = 20; // = is called assignment operator

// Let - Block scoped, values can be changed, mutable
let name = "John" 

// Const - Block scoped, values cannot be changed, immutable
const PI = 3.14159 // Cannot be changed, if you try to change it, it will throw an error.

// Data types
// There are two types of data types in JavaScript: Primitive and Reference

// 1. Primitive data types
// There are 6 primitive data types in JavaScript: String, Number, Boolean, Undefined, Null, and Symbol.
// a. String - Text values
let greeting = "Hello World";
let backticks = `You can embed %{greeting} with template literals` // Template literals are enclosed by backticks (``) instead of single or double quotes. They can contain placeholders, which are indicated by the dollar sign and curly braces (${expression}). This allows for easier string interpolation and multi-line strings.

// b. Number - Integer and floating point numbers
let integer = 42;
let decimal = 3.4159;
let negative = -10;

// c. Boolean - True or false values
let isLoggedIn = true;
let hasPermission = false;

// d. Undefined - Variables declared but not assigned a value(s)
let plp;
console.log(plp);

// e. Null - Intentional absence of value(s)
let employeeData = null;

// f. Symbol - Unique and immutable values. Often used to add unique property keys to an object to prevent collisions.
const sym = Symbol('description');
// console.log(sym); // symbol(description)

let uniqueId = Symbol('id');


// 2. Reference data types
// We only have two reference datatypes in JavaScript: Object and Array

// a. Object - Collection of key-value pairs
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
}

// Accessing object property
// console.log(person.firstName); // John
// console.log(person['lastName']); // Doe
// console.log(person['age']); // 30

// b. Arrays - Ordered list of values
let colors = ["red", "green", "blue", "yellow", "orange"];
let mixed = [1, 'Hello', true, {name: 'Object'}]

// The length of the mixed array.
// console.log(mixed.length); // 4

console.log(mixed[2]); // true


// Type conversion
// Converting a string to a number
let numStrt = "42";
let num = Number(numStrt); // Explicit conversion
console.log(num); // 42
let numImplicit = numStrt * 1; // Implicit conversion
console.log(numImplicit); // 42

// Falsey values in JavaScript
// - false
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN (Not a Number)

