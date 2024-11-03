document.body.innerHTML = `
    <div id="progressBar" style="width: 0%;"></div>
`;

const { progressBar } = require("./script_equipo5");

test("Progress bar width changes on scroll", () => {
    document.documentElement.scrollTop = 50;
    document.documentElement.scrollHeight = 500;
    document.documentElement.clientHeight = 400;

    window.dispatchEvent(new Event("scroll"));
    expect(progressBar.style.width).toBe("50%");
});
