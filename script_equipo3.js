const carouselImages = ["./resources/imagen1.png", "./resources/cr7.png", "./resources/tecnm.png"]; // Cambia las rutas de las imágenes
let currentImageIndex = 0;
const carouselImage = document.getElementById("carouselImage");

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImage.src = carouselImages[currentImageIndex];
}

setInterval(changeImage, 3000);

module.exports = {carouselImages,carouselImage,changeImage}