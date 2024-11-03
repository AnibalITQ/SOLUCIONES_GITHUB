document.body.innerHTML = `
    <img id="carouselImage" src="image1.jpg" />
`;

const { changeImage, carouselImages, carouselImage } = require("./script_equipo5");

test("Changes carousel image every 3 seconds", () => {
    jest.useFakeTimers();
    
    changeImage();
    expect(carouselImage.src).toContain("image2.jpg");

    jest.advanceTimersByTime(3000);
    changeImage();
    expect(carouselImage.src).toContain("image3.jpg");

    jest.advanceTimersByTime(3000);
    changeImage();
    expect(carouselImage.src).toContain("image1.jpg");
    
    jest.useRealTimers();
});
