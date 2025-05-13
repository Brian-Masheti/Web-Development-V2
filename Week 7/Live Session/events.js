// COmmon events in JS
// 1. Mouse Events:
// Click, double-click, mousedown, mouseup, mousemove, mouseover, mouseout.

// 2. Keyboard Events:
// Keydown, keyup, keypress.

// 3. Form Events:
// Submit, change, focus, blur, input.

// Document/Window Events:
// Load, resize, scroll, unload.

// element.addEventListener("eventType", handlerFunction);

element.addEventListener("click", function(event) {
    console.log
}

// Example of a function reference
function clickHandler() {
    alert("Button Clicked!");
}

// element.addEventListener("click", clickHandler);

// Example of an anonymous function
element.addEventListener("click", function() {
    alert("Button Clicked!");
})

// Example of an arrow function
element.addEventListener("click", () => {
    alert("Button Clicked!");
})

// Event Propagation:
// 1. Capturing Phase: The event starts from the root and goes down to the target element.
// 2. Bubbling Phase: The event starts from the target element and goes up to the root.

// Default is bubbling phase (false).
element.addEventListener("click", clickHandler, false); // Bubbling phase

// Capturing phase (true).
element.addEventListener("click", clickHandler, true); // Capturing phase


// Event propagation example
document.querySelector("div").addEventListener("click", function() {
    console.log("Div was clicked!");
});