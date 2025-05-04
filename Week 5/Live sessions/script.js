// Variables

// Declaring variables in javascript
// 1. var - used to declare variables that can be reassigned
// Keyword var = value;
// var name = 'Instructor Eddie' 
// console.log(name); // Output: Instructor Eddie

// 2. Let - used to declare variables that can be reassigned (modern way)
// Keyword let = value;
let age = 30;
console.log(age); // Output: 30

// age = 50; // re-aasign the value of age
name = "Instructor Brian"; // re-assign the value of name
console.log(name); // Output: Instructor Brian

// 3. const - used to declare variabes that cannot be re-assigned (constant value)
// Keyword const = value;
const pi = 3.14; // cannot be re-assigned
console.log(pi); // Output: 3.14

// pi = 1; 
// // Error: Assignment to constant variable. (Uncommenting this line will cause an error)


// Data Types - different types of data that can be stored in variables.
// 1. String - a sequence of characters enclosed in single or double quotes.
let nameString = "Instructor Eddie";

// 2. Number - a numeric value (interger or float)
let ageNumber = 30; // Number(integer)
const piNumber = 3.14; // Number(float)

// 3. Boolean - a true or false value (true or false)
let inInstructor = true; // Boolean(true)

// 4. Null - a special value that represents an empty or unknown value "no value"
let emptyValue = null; // Null(empty value)
let age = 0; // Number(integer)
let name = ''; // String(empty string)

// 5. Undefined - a value that has not been defined but not assigned a value
let undefinedValue; // Undefined(no value assigned)

// Non-primitive data types - complex data types that can hold multiple value i.e., objects, arrays, functions. 

// 1. Object - a collection of key-value pairs.
let person = { // object
    name: "Instructor Eddie",
    age: 30,
    isInstructor: true
};

console.log(person); // Output: { name: 'Instructor Eddie', age: 30, isInstructor: true }

// Create a object for a car
let car = {
    make: "Toyota",
    model: "Camry",
    color: "Red",
    year: 2020,
    isElectric: false
};

console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020, isElectric: false }
console.log(car.color)

// Create an object for a fruit with at least 3 characteristics
let fruit = {
    name: "Apple",
    color: "Red",
    isSweet: true
};

console.log(fruit); // Output: { name: 'Apple', color: 'Red', isSweet: true }

// 2. Array - an ordered list of values (can be of different data types). Indexed by numbers starting from 0.
let colors = ["Red", "Blue", "Green"];
console.log(colors); // Output: [ 'Red', 'Blue', 'Green' ]

// To access an element in an array, use the index number.
console.log(colors[0]); // Output: Red


let cars = ['Bugatti', 'Lamborghini', 'Ferrari', 'Porsche', 'McLaren', 'Volvo', 'VW', 'Mercedes', 'BMW'];

// Display the Volvo from the array
console.log(cars[5]); // Output: Volvo

// Display Ferrari from the array
console.log(cars[3]); // Output: Ferrari

// // Functions - a block of code that performs a specific task and can be reused.
// /*
//     function funstionName(parameter1, parameter2) {
//         // code to be executed
// */

function greet(name) {
    return "Hello, " + name + "!";
}

// console.log(greet("Instructor Brian")); // Output: Hello, Instructor Brian!

// // Write a function that that takes two parameters i.e., name and email address and give the output as "Hello, name! Your email address is email address."
function greet(name, email) {
    return "Hello my name is, " + name + "! My email address is " + email + ".";
}

// console.log(greet("Brian", "savatiabrian92@gmail.com")); // Output: Hello my name is, Brian! My email address is savatiabrian92@gmail.com.

// Operators - symbols that perform operatins on variables and values.
// 1. Arithmetic Operators - used to perform mathematical operations.

let a = 50;
let b = 20;

// Print the modulus of a and b
console.log(a % b); // Output: 10

// Print the sum of a and b
console.log(a + b); // Output: 70

// Print the difference of a and b
console.log(a - b); // Output: 30

// Print the product of a and b
console.log(a * b); // Output: 1000

// print the exponent of a and b
console.log(a ** b); // Output: 2500000000

// 2. Assignment Operators - used to assign values to variables.

let x = 10; // Assign the value of 10 to x
let y = 5; // Assign the value of 20 to y

// x +=y; // x = x + y (Addition assignment)
// x -=y; // x = x - y (Subtraction assignment)
// x *=y; // x = x * y (Multiplication assignment)
// x /=y; // x = x / y (Division assignment)

// Print the multiplication assignment of x
x *= y; // x = x * y
console.log(x); // Output: 50

// 3. Comparison Operators - used to compare two values and return a boolean (true or false)
// == - equal to
// != - not equal to
// === - equal value and equal type
// !== - not equal value or not equal type
// > - greater than
// < - less than
// >= - greater than or equal to
// <= - less than or equal to

let d = 100;
let e = '200';

// Print the comparison of d and e
console.log(d == e); // Output: true

// Print all the comparison operators
console.log(d == e); // Output: true
console.log(d != e); // Output: false
console.log(d === e); // Output: false
console.log(d !== e); // Output: true
console.log(d > e); // Output: false (100 is not greater than 200)
console.log(d < e); // Output: true (100 is less than 200)
console.log(d >= e); // Output: false (100 is not greater than or equal to 200)
console.log(d <= e); // Output: true (100 is less than or equal to 200)


// 4. Logical Operators - used to combine multiple conditions and return a boolean (true or false)
// && - logical AND (true if both conditions are true)
// || - logical OR (true if at least one condition is true)
// ! - logical NOT (true if the condition is false) 

console.log((d < e) && (d <= e)); // Output: true (both conditions are true)
console.log((d < e) || (d <= e)); // Output: true (at least one condition is true)
console.log(!(d < e)); // Output: false (condition is false)



let myAge = 25;
let isStudent = true;

// Use comparison and logical operators to:
// 1. if age is less than 25 && is learner.
// The output should be false since age is not less than 25 and is learner is true.
console.log((myAge < 25) && (isStudent)); // Output: false

// Loops and iteration - used to repeat a block of code a specific number of times or until a condition is met.




