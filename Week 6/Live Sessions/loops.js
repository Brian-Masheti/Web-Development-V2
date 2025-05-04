// For loops

// For loop componnts

// for (Initializations; Condition; Increment/Decrement){
//code 
// }

// Basic For loop

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i+1}`);
    // console.log(`iteration ${1}`); // Output: Iteration 1
}

// While loop
let count = 0; // Initialize a variable to keep track of the count
while (count <= 5) {
    console.log(`Count: ${count}`); // Output: Count: *0*
    count++; // Increment the count by 1
}

// Do... while loop
do {
    console.log(`Number: ${num}`) // Output: Number: 0
    num -= 2; // Decrement the number by 2
} while (num > 0); // Continue the loop until num is greater than 0

// For ... of loop
const fruits = ['apple', 'banana', 'orange', 'mango'];

for (const fruit of fruits) {
    console.log(fruit); // Output: apple, banana, orange, mango
}


const name = 'Brian';

for (const letter of name) {
    console.log(letter); // Output: B, r, i, a, n
}

// For ... in loop
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false
};

for (const property in person) {
    console.log(`${property}: ${person[property]}`); // Output: firstName: John, lastName: Doe, age: 30, isStudent: false
}

