const carouselImages = ["./resources/imagen1.png", "./resources/cr7.png", "./resources/tecnm.png"];
let currentImageIndex = 0;

function changeImage() {
    const carouselImage = document.getElementById("carouselImage"); // Move this inside the function
    if (carouselImage) { // Check if the element exists
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImage.src = carouselImages[currentImageIndex];
    }
}

setInterval(changeImage, 3000);

module.exports = { carouselImages, changeImage };
