/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <div id="progressBarContainer" style="width: 100%; background-color: #e0e0e0;">
        <div id="progressBar" style="width: 0%; height: 20px; background-color: #76c7c0;"></div>
    </div>
`;

const { progressBar } = require("../script_equipo5");

test("Progress bar width changes on scroll", () => {
    // Set up the scroll properties to achieve 50% scroll position
    document.documentElement.scrollTop = 250;
    document.documentElement.scrollHeight = 500;
    document.documentElement.clientHeight = 250;

    // Dispatch the scroll event
    window.dispatchEvent(new Event("scroll"));

    // Assert the progress bar width
    expect(progressBar.style.width).toBe("50%");
});
