/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `<img id="carouselImage" src="${carouselImages[0]}" />`;
const { carouselImages, carouselImage, changeImage } = require('../script_equipo3.js');

    test('debería cambiar a la siguiente imagen en el arreglo', () => {
    
        // Imagen inicial debe ser la primera en el arreglo
        expect(carouselImage.src).toContain("imagen1.png");
    
        // Llamamos a la función para cambiar de imagen
        changeImage();
    
        // Después de cambiar, debería mostrar la segunda imagen
        expect(carouselImage.src).toContain("cr7.png");
    
        // Llamamos a la función nuevamente para cambiar de imagen
        changeImage();
    
        // Ahora debería mostrar la tercera imagen
        expect(carouselImage.src).toContain("tecnm.png");
    
        // Llamamos una vez más para verificar que vuelve a la primera imagen
        changeImage();
        expect(carouselImage.src).toContain("imagen1.png");
    });
    

