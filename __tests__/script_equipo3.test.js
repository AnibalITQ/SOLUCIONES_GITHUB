/**
 * @jest-environment jsdom
 */

const { carouselImages, carouselImage, changeImage } = require('../script_equipo3.js');

describe('Carousel Image Changer', () => {
    beforeEach(() => {
        document.body.innerHTML = `<img id="carouselImage" src="${carouselImages[0]}" />`;
    });

    test('debería cambiar a la siguiente imagen en el arreglo', () => {
        const carouselImage = document.getElementById("carouselImage");

        // Imagen inicial debe ser la primera en el arreglo
        expect(carouselImage.src).toContain(carouselImages[0]);

        // Llamamos a la función para cambiar de imagen
        changeImage();

        // Después de cambiar, debería mostrar la segunda imagen
        expect(carouselImage.src).toContain(carouselImages[1]);

        // Llamamos a la función nuevamente para cambiar de imagen
        changeImage();

        // Ahora debería mostrar la tercera imagen
        expect(carouselImage.src).toContain(carouselImages[2]);

        // Llamamos una vez más para verificar que vuelve a la primera imagen
        changeImage();
        expect(carouselImage.src).toContain(carouselImages[0]);
    });
});
