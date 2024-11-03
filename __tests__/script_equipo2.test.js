document.body.innerHTML = `
    <div id="textEquipo2">texto original</div>
`;

const { textEquipo2 } = require("./script_equipo2");

test("Double click changes text to uppercase", () => {
    textEquipo2.dispatchEvent(new MouseEvent("dblclick"));
    expect(textEquipo2.textContent).toBe("TEXTO ORIGINAL");
});
