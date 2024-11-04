const contentEquipo4 = document.getElementById("contentEquipo4");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    contentEquipo4.style.display = contentEquipo4.style.display === "none" ? "block" : "none";
});

module.exports = {contentEquipo4, toggleButton}