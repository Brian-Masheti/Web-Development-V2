// IF-Else
// let age = 15;

// if (age >= 18) {
//     console.log("You are an adult.");

// } 
// else{
//     console.log("Please grow up 😁.");
// }


// let score = 80;

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// Switch Case
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

// console.log(dayName); // Wednesday

// Ternary Operator - Compacting everything together insteadof nesting if-else statements
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
// console.log(status); // Adult

// Condition ? valueIfTrue : valueIfFalse // Alternative to if-else statement


// Good for simple or short conditions
// Example: Check if a number is even or odd
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // B