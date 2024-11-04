/**
 * @jest-environment jsdom
 */

// Set up the initial HTML structure
document.body.innerHTML = `
    <h1>Click Counter</h1>
    <p>Number of clicks: <span id="counter">0</span></p>
    <button id="clickButton">Click Me!</button>
`;

// Import the JavaScript file that contains the counter logic
require("../script_equipo5.js");

describe("Click Counter", () => {
    test("increments counter on button click", () => {
        // Get the button and counter display from the DOM
        const clickButton = document.getElementById("clickButton");
        const counterDisplay = document.getElementById("counter");

        // Check initial counter value
        expect(counterDisplay.textContent).toBe("0");

        // Simulate a button click
        clickButton.click();

        // Check counter value after 1 click
        expect(counterDisplay.textContent).toBe("1");

        // Simulate another button click
        clickButton.click();

        // Check counter value after 2 clicks
        expect(counterDisplay.textContent).toBe("2");
    });
});
