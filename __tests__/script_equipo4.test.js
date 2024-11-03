/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <div id="contentEquipo4" style="display: none;"></div>
    <button id="toggleButton"></button>
`;

const { contentEquipo4, toggleButton } = require("./script_equipo4");

test("Toggles contentEquipo4 visibility on button click", () => {
    toggleButton.click();
    expect(contentEquipo4.style.display).toBe("block");

    toggleButton.click();
    expect(contentEquipo4.style.display).toBe("none");
});
