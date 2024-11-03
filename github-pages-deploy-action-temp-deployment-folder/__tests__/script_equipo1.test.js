/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <input id="inputEquipo1" />
    <div id="charCount"></div>
`;

// Import script after setting up the DOM
require("../script_equipo1");

const inputEquipo1 = document.getElementById("inputEquipo1");
const charCount = document.getElementById("charCount");

test("Character count updates on input", () => {
    inputEquipo1.value = "Hola";
    inputEquipo1.dispatchEvent(new Event("input"));
    expect(charCount.textContent).toBe("4 caracteres");
});
