const inputEquipo1 = document.getElementById("inputEquipo1");
const charCount = document.getElementById("charCount");

inputEquipo1.addEventListener("input", () => {
    charCount.textContent = `${inputEquipo1.value.length} caracteres`;
});

module.exports = { inputEquipo1, charCount };
