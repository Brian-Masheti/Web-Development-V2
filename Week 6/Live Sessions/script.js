// Step 1: Create an Element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph."; // Set the text content of the new paragraph
document.body.appendChild(newParagraph); // Append the new paragraph to the body of the document

// Step 2: Create a list
const list = document.createElement("ul"); // Create an unordered list
for (let i = 1; i<=3; i++) {
    const item = document.createElement("li"); // Create a list item
    item.textContent = `Item ${i}`; // Set the text content of the list item
    list.appendChild(item); // Append the list item to the list
}

// Step 3: Add new elements to the DOM
const contentDiv = document.getElementById("content"); // Select the content div

// Append the list
contentDiv.appendChild(list); // Append the list to the content div

// Step 4: Remove an element
// Let's say we want t remove the first paragraph (created above)
const firstParagraph = document.querySelector("p"); // Select the first paragraph
firstParagraph.remove(); // Modern method to remove an element from the DOM