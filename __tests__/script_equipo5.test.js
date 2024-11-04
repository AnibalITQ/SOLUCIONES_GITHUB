/**
 * @jest-environment jsdom
 */

require("../script_equipo5");  // Ensure the script runs and attaches the event listener

document.body.innerHTML = `
    <div id="progressBarContainer" style="width: 100%; background-color: #e0e0e0;">
        <div id="progressBar" style="width: 0%; height: 20px; background-color: #76c7c0;"></div>
    </div>
`;

test("Progress bar width changes on scroll", () => {
    // Set up scroll properties
    document.documentElement.scrollTop = 250;
    document.documentElement.scrollHeight = 500;
    document.documentElement.clientHeight = 250;

    // Dispatch the scroll event
    window.dispatchEvent(new Event("scroll"));

    // Access the global progressBar set up by the script
    expect(window.progressBar.style.width).toBe("50%");
});
