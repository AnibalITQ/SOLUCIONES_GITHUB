/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <input id="inputEquipo1" />
    <div id="charCount"></div>
`;

const { inputEquipo1, charCount } = require("./script_equipo1");

test("Character count updates on input", () => {
    inputEquipo1.value = "Hola";
    inputEquipo1.dispatchEvent(new Event("input"));
    expect(charCount.textContent).toBe("4 caracteres");
});
