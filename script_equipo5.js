const progressBar = document.getElementById("progressBar");

// Attach progressBar to window for testing purposes
window.progressBar = progressBar;
window.addEventListener("scroll", () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollPosition / scrollHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

module.exports = { progressBar };
