// The traditional way of calling a function:

// function greet(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greet('Cliassin'))

// Modern way
// Expresssing a variable
// const greet = function(name) {
//     return "Hello, " + name + "!";
// };
// console.log(greet('Cliassin'))

// You can call it by using: greet()


// Using the arrow function syntax. A more concise way to write functions in JavaScript.
// const greet = (name) => {
//     return "Hello, " + name + "!"; 
// }
// console.log(greet('Cliassin'))


// The short end version of the single expression.
// const greetShort = (name) => "Hello, " + name + "!!";
// console.log(greetShort('Daclin'))

// Basic function with parameters and return value
function add(a, b) {
    return a + b;
}
// console.log(add(5, 3)); // 15

// Default parameters
function greet (name = "Guest") {
    return "Hello, " + name + "!";
}

// console.log(greet()); // Hello, Guest!
// console.log(greet("Daisy")); // Hello, Daisy!

function sum(...numbers) { // Rest parameter, it is there to collect incoming arguments into a single array, called numbers in this case.
    return numbers.reduce((total, sum) => total + sum, 0); // The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
}

// console.log(sum(1, 2, 3, 4, 5)); // 15