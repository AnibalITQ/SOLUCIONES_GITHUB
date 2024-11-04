// Select the counter display and the button from the DOM
const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");

// Initialize the counter
let count = 0;

// Add a click event listener to the button
clickButton.addEventListener("click", () => {
    // Increment the counter
    count++;
    // Update the counter display
    counterDisplay.textContent = count;
});
